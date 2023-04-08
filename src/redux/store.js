import messageReducer from "./messages_reducer";
import profileReducer from "./profile_reducer";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';




let store = {
    _state: {
        profilePage:{
            posts:[
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
                    date: '19 октября',
                    text: "VK запретила своим сотрудникам работать за границей — ТАСС.\n\nВо внутреннем письме компании говорится, что у сотрудников остаётся возможность удаленной работы, но только с территории России. Такое ограничение необходимо, чтобы «находиться в одном контексте с пользователями и понимать их потребности», — уточняется в письме",
                    image: "https://sun2-20.userapi.com/impg/10bf-Wsq3niCSxgJ65zY7nG5YZw8YamL44grFw/6Im46zCGqjc.jpg?size=1566x900&quality=96&sign=399b9b3ff8043bb1e07d6d94669f5594&type=album",
                    likeCounter: '44',
                },
            
        ],
            newPostText:''
        },
        messagesPage:{
            dialogs: [
                { name:'Игорь', id: 1},
                { name:'Алёна', id: 2},
                { name:'Николай', id: 3},
                { name:'Андрей', id: 4},
                { name:'Лиза', id: 5}
            ],
            messages:[
                { message:'Привет!'},
                { message:'Как дела?'},
                { message:'Да пойдёт, по тихоньку.'},
                { message:'Сам то как?'},
            ],
            newMessageText:''
        },
    },
    getState(){ return this._state},
    _rerenderEntireTree (){},


    dispatch(action){

        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.messagesPage = messageReducer(this._state.messagesPage,action);
        this._rerenderEntireTree(this._state);
    },

    subscribe(observer){
        this._rerenderEntireTree = observer
    },
}

export default store;
window.store = store;