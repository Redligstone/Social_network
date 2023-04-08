import { profileAPI, usersAPI } from "../API/API";
import { stopSubmit } from "redux-form";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS_PROFILE = 'SET_STATUS_PROFILE';
const SET_PHOTO_SUCCESS = 'SET_PHOTO_SUCCESS/profile';
const SET_PROFILE_SUCCESS = 'SET_PROFILE_SUCCESS';


let initialState = {
    posts: [
        {
            ava: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
            name: 'Андрей Иванов',
            date: '20 октября',
            text: "Пляжи Бали на карте\n\nСразу следует сказать, что на Бали нет идеальных пляжей. Серьезно. Нет ни одного пляжа, в котором бы сочеталось все необходимое, чтобы и красиво и купаться и удобно подъехать и с детьми можно и не многолюдно. И мы еще не упоминаем серфинг! Это отдельная тема. Тем, кто катает нужны волны и многие другие факторы для серферов не имеют значения.\n\nТакже на Бали нет никаких секретных пляжей. Секретные пляжи Бали — это миф, увы. Все пляжи давно изучены и есть на картах, в блогах, в геолокациях инстаграма. Даже самые маленькие и укромные пляжики есть в интернете.",
            image: "https://i.pinimg.com/originals/a6/ca/0b/a6ca0b65d451ff85ac2fa8e50e4fb0d1.jpg",
            likeCounter: '26',
        },
        {
            ava: 'https://aquacleaning.kz/images/team/testimonial1.jpg',
            name: 'Сергей Петров',
            date: '19 октября',
            text: "Главный евангелист Google и «отец интернета» Винтон Серф призвал не торопиться с инвестициями в диалоговый ИИ только потому, что это «горячая тема».\n\nПо его словам, технология не всегда работает так, как многим хотелось бы. Чат-боты все еще допускают ошибки, а также «красноречиво» выдают неточные ответы за факты.\n\nОн призвал инвесторов быть вдумчивыми, а разработчиков — ответственными.",
            image: "https://cdn5.vectorstock.com/i/1000x1000/42/54/ai-robot-controlling-puppet-business-human-vector-21044254.jpg",
            likeCounter: '84',
        },
        {
            ava: 'https://tr-static.eodev.com/files/de6/6bae7e592c95c64a6d54d4689bde6267.jpg',
            name: 'Саша Сидоров',
            date: '08 мая',
            text: "VK запретила своим сотрудникам работать за границей — ТАСС.\n\nВо внутреннем письме компании говорится, что у сотрудников остаётся возможность удаленной работы, но только с территории России. Такое ограничение необходимо, чтобы «находиться в одном контексте с пользователями и понимать их потребности», — уточняется в письме",
            image: "https://sun2-20.userapi.com/impg/10bf-Wsq3niCSxgJ65zY7nG5YZw8YamL44grFw/6Im46zCGqjc.jpg?size=1566x900&quality=96&sign=399b9b3ff8043bb1e07d6d94669f5594&type=album",
            likeCounter: '44',
        },

    ],
    newPostText: '',
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                ava: state.profile.photos.large,
                name: state.profile.fullName,
                date: '18 октября',
                text: action.newPostText,
                image: '',
                likeCounter: '2'
            }
           
            try{
                return {
                    ...state,
                    posts: [...state.posts, newPost],
                }
            }
            catch(error){
                debugger
                console.log(error)
            }
           

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile,

            }
        case SET_STATUS_PROFILE:
            return {
                ...state, status: action.status,
            }
        case SET_PHOTO_SUCCESS:
            // return console.log('why')
            return {
                ...state, profile:{...state.profile, photos:action.photos},
            }
        case SET_PROFILE_SUCCESS:
            // return console.log('why')
            return {
                ...state, profile:{...state.profile},
            }
        default:
            return state;
    }

}

//Action Creators
export const addPostActionCreator = (newPostText) => {
    return { type: ADD_POST, newPostText }
}
export const updateNewPostActionCreator = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text }
}
export const setUserProfile = (profile) => {
    return { type: SET_USER_PROFILE, profile }
}
export const setStatus = (status) => {
    return { type: SET_STATUS_PROFILE, status }
}
export const setPhotoSuccess = (photos) => {
    return { type: SET_PHOTO_SUCCESS, photos }
}
export const setProfileSuccess = (profile) => {
    return { type: SET_PROFILE_SUCCESS, profile }
}





//Thunk Creators
export const getProfile = (userId) => {
    return async (dispatch) => {
       let data = await usersAPI.getProfile(userId)
            dispatch(setUserProfile(data))
    }
}

export const getStatus = (userId) => {
    return async (dispatch) => {
        let data = await profileAPI.getStatus(userId)
            dispatch(setStatus(data))
    }
}
export const updateStatus = (status) => {
    return async (dispatch) => {
       let data = await profileAPI.updateStatus(status)
            if (data.resultCode === 0) {
                dispatch(setStatus(status))
            }
    }
}
export const savePhoto = (file) => {
    return async (dispatch) => {
       let response = await profileAPI.savePhoto(file)
            if (response.data.resultCode === 0) {
                dispatch(setPhotoSuccess(response.data.data.photos))
            }
    }
}
export const saveProfile = (profile) => {
    return async (dispatch,getState) => {
       const userId = getState().auth.userId
       let response = await profileAPI.saveProfile(profile)
       debugger
            if (response.data.resultCode === 0) {
                dispatch(getProfile(userId))
            } else {
                dispatch(stopSubmit('profile-data', {_error:response.data.messages[0]}));
                return Promise.reject(response.data.messages[0]);
            }
    }
}


export default profileReducer;