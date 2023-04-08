import React from "react";
import LoginReduxForm from "./login_form";
import { login } from "../../redux/auth_reducer";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import s from './loginForm.module.css'


const Login = (props) =>{

    const onSubmit = (formData) =>{
        console.log(formData)
        props.login(formData.email,formData.password,formData.rememberMe,formData.captcha)
    }

    if(props.isAuth){
        return <Navigate to="/profile"/>
    }
    // if(!props.isAuth){
    //     return <Navigate to="/login"/>
    // }

    return(
        <div className={s.loginContent}>
            <img src='https://www.svgrepo.com/show/303449/vk-1-logo.svg' className={s.img} />
            <span className={s.title}>Вход ВКонтакте</span>
            {/* onSubmit здесь это слушатель, а не пропс */}
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}

let mapStateToProps = (state) => {
    debugger
    return {
        isAuth:state.auth.isAuth,
        captchaUrl:state.auth.captchaUrl,
    }
}

export default connect(mapStateToProps,{login})(Login);