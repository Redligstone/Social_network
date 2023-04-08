const ADD_MESSAGE = 'ADD_MESSAGE';
const ADD_IMAGE = 'ADD_IMAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let initialState = {
    dialogs: [
        { name:'Милена', id: 1,ava:'https://static.tildacdn.com/tild3332-3961-4964-b838-626461306262/photo.png'},
        { name:'Алёна', id: 2,ava:'https://thumbs.dreamstime.com/b/портреты-коммерсантки-воп-ощения-в-кругах-pics-потребите-я-вектора-85824906.jpg'},
        { name:'Николай', id: 3, ava:'https://klike.net/uploads/posts/2023-01/1674365337_3-31.jpg'},
        { name:'Андрей', id: 4,ava:'https://avatars.mds.yandex.net/i?id=9af1db0c19b95603e65363c62b0f349c-4575548-images-thumbs&ref=rim&n=33&w=234&h=234'},
        { name:'Лиза', id: 5,ava:'https://avatars.mds.yandex.net/i?id=ed98adab7679c3b95d3a24d3552274f7-5235063-images-thumbs&ref=rim&n=33&w=234&h=234'},
        { name:'Максим', id: 6, ava:'https://avatars.mds.yandex.net/i?id=be55aa57add8ab0b970c01b9debcbbc9-5877187-images-thumbs&ref=rim&n=33&w=234&h=234'},
        { name:'Витя', id: 7,ava:'https://avatars.mds.yandex.net/i?id=f53efa971c2c379a4f3a7fbd5e2f8139-6637734-images-thumbs&ref=rim&n=33&w=234&h=234'},
        { name:'Олег', id: 8,ava:'https://avatars.mds.yandex.net/i?id=4e18b69031055511cf606341b88fc1e305d8950b-5897285-images-thumbs&ref=rim&n=33&w=234&h=234'},
        { name:'Никита', id: 9,ava:'https://storage.googleapis.com/pkommunity/avatars/4B01EC99-343C-4CE7-8BB9-39102007493A.jpeg'},
        { name:'Глеб', id: 10,ava:'https://avatars.mds.yandex.net/i?id=7eb72efe5cf128e3c2ababa0b3ef96774f550b31-5124559-images-thumbs&ref=rim&n=33&w=234&h=234'},
        { name:'Олеся', id:11,ava:'https://kutts.ru/wp-content/uploads/2019/11/boy1.png'},
        { name:'Софья', id: 12,ava:'https://avatars.mds.yandex.net/i?id=31ffde63ef7eb59966c689ddad0d5dc8-5301760-images-thumbs&ref=rim&n=33&w=234&h=234'},
        { name:'Настя', id: 13,ava:'https://thumbs.dreamstime.com/b/печать-102690082.jpg'},
        { name:'Игорь', id: 14,ava:'https://kuhni-mek.ru/images/noavatarnam.png'},
    ],
    messages:[
        { message:'Привет!',id:1,ava:'https://static.tildacdn.com/tild3332-3961-4964-b838-626461306262/photo.png'},
        { message:'Как дела?',id:2,ava:'https://avatars.mds.yandex.net/i?id=7eb72efe5cf128e3c2ababa0b3ef96774f550b31-5124559-images-thumbs&ref=rim&n=33&w=234&h=234'},
        { message:'Да пойдёт, по тихоньку.',id:3,ava:'https://static.tildacdn.com/tild3332-3961-4964-b838-626461306262/photo.png'},
        { message:'А мы тут вот на природу ездили недавно, шашлыки жарили',id:4,ava:'https://avatars.mds.yandex.net/i?id=7eb72efe5cf128e3c2ababa0b3ef96774f550b31-5124559-images-thumbs&ref=rim&n=33&w=234&h=234',image:'https://traveltimes.ru/wp-content/uploads/2021/09/c28a4956500c4dd440ee952251707f03.jpeg'},
        { message:'Я тут весь день проект доделываю, хоть солнце не так сильно печёт сегодня',id:5,ava:'https://static.tildacdn.com/tild3332-3961-4964-b838-626461306262/photo.png',image:'https://avatars.mds.yandex.net/i?id=49d983e2912c89eeb52807e8e6eb1d53-5088393-images-thumbs&ref=rim&n=33&w=271&h=234'},
        { message:'Какой вид, аж искупаться захотелось',id:2,ava:'https://avatars.mds.yandex.net/i?id=7eb72efe5cf128e3c2ababa0b3ef96774f550b31-5124559-images-thumbs&ref=rim&n=33&w=234&h=234'},
    ],
}

const messageReducer = (state = initialState,action) =>{
    
    switch(action.type){
        case ADD_MESSAGE:
            return {
                ...state,
                messages:[...state.messages,{message:action.newMessageText,ava:'https://avatars.mds.yandex.net/i?id=7eb72efe5cf128e3c2ababa0b3ef96774f550b31-5124559-images-thumbs&ref=rim&n=33&w=234&h=234'}],
                
            };
        case ADD_IMAGE:
            return {
                ...state,
                messages:[...state.messages,{message:action.newMessageText,ava:'https://avatars.mds.yandex.net/i?id=7eb72efe5cf128e3c2ababa0b3ef96774f550b31-5124559-images-thumbs&ref=rim&n=33&w=234&h=234',image:action.image}],
                
            };
        
        default:
            return state;
        }

}


export const addMessageActionCreator = (newMessageText) =>{
    return {type:ADD_MESSAGE, newMessageText}
}
export const updateNewMessageActionCreator = (body) =>{
    return {type:UPDATE_NEW_MESSAGE_TEXT, body:body}
}
export const addImage = (image) => {
    return { type: ADD_IMAGE, image }
}


export const addImageAC = (image) => {
    return (dispatch) => {
                dispatch(addImage (image))
    }
}

export default messageReducer;