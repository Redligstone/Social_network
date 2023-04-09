import React, { useEffect, useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../../../common/formControls/formControls';
import { MaxLength, required } from '../../../../utilits/validators';
import s from './new_post.module.css'

let maxLength20 = MaxLength(20);

let NewPost = (props) => {


    let newText = React.createRef();

    const addPost = (formData) => {
        console.log(formData);
        props.addNewPost(formData.text);
    };
    debugger
    return (
        <>
        {props.isOwner && 
        <div className={s.wrapper}>
            <ReduxPostTextForm onSubmit={addPost} profile={props.profile} isOwner={props.isOwner}/>
        </div>}
        
        </>
        
    )
}

const PostTextForm = (props) => {
    debugger
    return (
        <div>
            {props.isOwner && <form onSubmit={props.handleSubmit} className={s.container}>
            <div className={s.postTop}>
                
                <a><img src={props.profile && props.profile.photos.large || 'https://termosfera.su/wp-content/uploads/2022/04/2816616767_vubrbej.jpg'} className={s.ava} /></a>

                <Field component={Textarea} name='text' placeholder='Что у вас нового?' className={s.text}  />

                <a className={s.smileLink}><img src="https://www.svgrepo.com/show/494000/smile.svg" className={s.smile} /></a>
            </div >
            <div className={s.postBottom}>
                <a>
                    <img src="https://www.svgrepo.com/show/506315/settings.svg" alt="" className={s.set} />
                </a>

                <label for="file-upload" className={s.upload}>
                    <img src="https://www.svgrepo.com/show/502794/photo-camera.svg" alt="Upload Image" className={s.img} />
                </label>
                <input id="file-upload" type="file" accept="image/*" className={s.input} />

                <button  className={s.public}>Опубликовать</button>
            </div >
        </form >}
        </div>
        
    )
}
const ReduxPostTextForm = reduxForm({
    form: 'textpost'
})(PostTextForm)
export default NewPost