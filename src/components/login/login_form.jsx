import React from "react";
import { Field,reduxForm } from "redux-form";
import { createField, Element } from "../common/formControls/formControls";
// import { Input } from "../common/formControls/formControls";
import { MaxLength, required } from "../utilits/validators";
import s from './loginForm.module.css'

let maxLength20 = MaxLength(20);
const Input = Element("input");


const LoginForm = (props) => {
    // const initialValues = { myField: 'Initial value' };
    debugger
    return (
        <form onSubmit={props.handleSubmit}>
            {createField("логин",'email','',required,Input)}
            {createField("пароль",'password','',[required,maxLength20],Input,{ type:"password"})}
            {createField(null,'rememberMe','',[],Input,{type:"checkbox", initialValue:true},'запомнить меня')}
            {props.captchaUrl && <img src={props.captchaUrl}></img>}
            {props.captchaUrl && createField('капча','captcha','',[required],Input)}

            {props.error &&
                <div className={s.formSummaryError}>
                {props.error}
            </div>
            }
            <div>
                <button >Войти</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm(
    {
        form:'login',
    }
)(LoginForm)

export default LoginReduxForm;