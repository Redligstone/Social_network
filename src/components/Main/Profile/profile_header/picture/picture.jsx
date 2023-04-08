import React from 'react';
import Preloader from '../../../../common/preloader/preloader';
import s from './picture.module.css'

let Picture = (props) => {
    if (!props.profile) {
        return Preloader
    }

    const photoSelected = (e) => {
        if (e.target.files.length) {
            console.log('REFRESH')
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div className={s.container}>
            <div className={s.img}>
                <div className={s.wrapBorder}>
                    <label for="ava-upload" >
                    <img src={props.profile.photos.large || 'https://termosfera.su/wp-content/uploads/2022/04/2816616767_vubrbej.jpg'} className={s.ava} />
                </label>
                </div>
                {props.isOwner && <input id="ava-upload" type='file' className={s.input} onChange={photoSelected}></input>}
            </div>
        </div>

    )
}

export default Picture