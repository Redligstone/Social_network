import React from "react"
import { Field } from "redux-form"
import s from './formControls.module.css'

export const Textarea = ({ input, meta, ...props }) => {

    const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                <textarea {...input} {...props}></textarea>
            </div>
        </div>
    )
}

export const Input = ({ input, meta, ...props }) => {

    const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                <input {...input} {...props}></input>
            </div>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}

//HOC для создания, с помощью передачи которого в отдельном компоненте через замыкания можно создавать любые формы
// А потом просто его импортим в компоненту формы, вызываем как
// const Textarea = Element("textarea"); и передаем  <Field component={Textarea} .../>
export const Element = Element => ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <Element {...input} {...props} />
            {hasError && <span> {meta.error} </span>}
        </div>
    );
};

export const createField = ( placeholder,name,initialValue,validators,component,props={},text='')=>{
    return(<div>
    <Field component={component} validate={validators} name={name} {...props} placeholder={placeholder} initialvalue={initialValue}/>
    <p>{text}</p>
    </div>)
}