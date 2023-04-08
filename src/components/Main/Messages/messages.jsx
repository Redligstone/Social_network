import React from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import { Field, reduxForm } from "redux-form";
import { Input, Textarea } from '../../common/formControls/formControls';
import { MaxLength, required } from '../../utilits/validators';
import s from './messages.module.css'
import { useState } from 'react';
import { addImageAC } from '../../../redux/messages_reducer';

const DialogItem = (props) => {
    let path = "/messages/" + props.id

    return (
        <div className={s.dialog_item}>
            <NavLink to={path} className={s.link}>
                <img src={props.ava} className={s.ava} />
                {props.name}
            </NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message_item}>
            <img src={props.ava} className={s.ava} />
            <div className={s.messageContent}>
                <p>{props.message}</p>
                {props.image && <img className={s.messageImage} src={props.image} alt="" />}
            </div>
        </div>
    )
}


let Messages = (props) => {
    let newMessage = React.createRef();

    let messageSend = (formData) => {
        console.log(formData)
        props.addMessage(formData.message);
    }
    let state = props.messagesPage;


    let dialogsItems = state.dialogs.map(d => { return (<DialogItem name={d.name} id={d.id} ava={d.ava} />) })
    let messagesItems = state.messages.map(m => { return (<Message message={m.message} id={m.id} ava={m.ava} image={m.image} />) })

    return (
        <div className={s.dialogs}>
            <div className={s.dialog_items}>
                {dialogsItems}
            </div>

            <div className={s.messages_items}>
                <div className={s.messages_container}>
                    {messagesItems}
                </div>

                <MessageReduxForm onSubmit={messageSend} />
            </div>
        </div>
    )
}

let maxLength100 = MaxLength(100);


const MessageForm = (props) => {
    const sendImage =(e)=>{
        if (e.target.files.length) {
            console.log(e.target.files[0])
            props.addImageAC(e.target.files[0])
        }
    }

    return (
        <form onSubmit={props.handleSubmit} className={s.message_input_container}>
            <div className={s.input_image_upload}>
                <label for="file-upload" className={s.upload}>
                    <img src="https://www.svgrepo.com/show/502794/photo-camera.svg" alt="Upload Image" className={s.img} />
                </label>
                <input name='image' id="file-upload" type="file" accept="image/*" onChange={sendImage} className={s.input}  />
                {/* <Field name='image' component="input" type="file" id="file-upload" accept="image/*" className={s.input} /> */}
            </div>

            <div className={s.message_input}>
                <Field name='message' component={Textarea} validate={required} className={s.message_input_text} placeholder='Напишите сообщение...'></Field>
            </div>

            <div className={s.message_input_button}>
                <button to='/messages/2' className={s.message_input_link}>
                    <img src="https://cdn.iconscout.com/icon/free/png-512/send-2451554-2082560.png?f=avif&w=256" alt="" />
                </button>
            </div>
        </form>
    )
}
const MessageReduxForm = reduxForm(
    {
        form: 'messageSend',
    }
)(MessageForm)
export default Messages
