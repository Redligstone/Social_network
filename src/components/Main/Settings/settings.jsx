import React, { useState } from 'react';
import s from './settings.module.css'

const SettingsData = ({isOwner,goToEditProfile,profile}) =>{
    debugger
    return (
        <div className={s.aboutData}>
                <div className={s.infoTitle}><b>Моё имя: </b>{profile.fullName}</div>
                <div className={s.infoTitle}><b>Ищу работу: </b>{profile.lookingForAJob ? 'Да' : 'Нет'}</div>
                <div className={s.infoTitle}><b>Обо мне: </b>{profile.aboutMe}</div>
                <div className={s.infoTitle}><b>Навыки: </b>{profile.lookingForAJobDescription}</div>
                <div className={s.infoTitle}><b>Контакты: </b>{Object.keys(profile.contacts).map(key =>{
                    return <Contact className={s.contact} contactTitle={key} contactValue={profile.contacts[key]}/>
                })}</div>
                
                {isOwner && <div>
                <button className={s.editButton} onClick={goToEditProfile}>Редактировать профиль</button>
            </div>}
            </div>
    )
}
const Contact = ({contactTitle, contactValue}) =>{
    return <div className={s.contact}>{contactTitle}:{contactValue}</div>
}
export default SettingsData