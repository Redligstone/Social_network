import { stopSubmit } from "redux-form";
import { authAPI,securityAPI } from "../API/API";


const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

let initialState = {

    userId: null,
    login: null,
    email: null,
    isAuth: false,
    isFetching: false,
    authProfile: null,
    captchaUrl:null,
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {


        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                captchaUrl:action.captchaUrl,
            }
        default:
            return state;
    }

}

export const setAuthUserData = (userId, email, login, isAuth) => {
    return { type: SET_USER_DATA, data: { userId, email, login, isAuth } }
}
export const getCaptchaUrlSuccess = (captchaUrl) => {
    return { type: GET_CAPTCHA_URL_SUCCESS, captchaUrl }
}




export const getAuthUserData = () => {
    return (dispatch) => {
        return authAPI.getAuthData().then((data) => {
            if (data.resultCode === 0) {
                let { id, email, login } = data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
    }
}


export const login = (email, password, rememberMe,captcha) => {
    return (dispatch) => {

        authAPI.login(email, password, rememberMe,captcha).then((data) => {
            if (data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
            else {
                if(data.resultCode === 10){
                    dispatch(getCaptchaUrl())
                }
                if (data.resultCode === 1) {
                    console.log(data.messages)
                }
                let message = data.messages.length > 0 ? data.messages[0] : "some error";
                dispatch(stopSubmit('login', { _error: message }))
            }
    
        })
    }
}


export const logout = () => {
    return async (dispatch) => {
        let data = await authAPI.logout()
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    }
}

export const getCaptchaUrl = () => {
    return async (dispatch) => {
        debugger
        const response = await securityAPI.getCaptcha()
        const captchaUrl = response.data.url;
        dispatch(getCaptchaUrlSuccess(captchaUrl))
    }
}

export default authReducer;