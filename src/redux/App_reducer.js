import {getAuthUserData} from './auth_reducer'


const SET_INITIALIZED = 'SET_INITIALIZED';

let initialState = {
    initialized:false,
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {


        case SET_INITIALIZED:
            return {
                ...state,
                initialized:true,
            }
        default:
            return state;
    }

}

export const setInitializedSuccess = () => {
    return { type: SET_INITIALIZED}
}

export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(getAuthUserData())
        
        Promise.all([promise]).then(()=>{
            dispatch(setInitializedSuccess())
        })
    }
}




export default authReducer;