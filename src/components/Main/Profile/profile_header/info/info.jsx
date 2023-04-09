import React, { useState } from 'react';
import s from './info.module.css'

import { ReactComponent as Location } from './icons/location.svg';
import { ReactComponent as Work } from './icons/work.svg';
import { ReactComponent as About } from './icons/info.svg';
import Preloader from '../../../../common/preloader/preloader';
import ProfileStatus from './info_status';
import ProfileStatusWithHook from './info_status_WithHook';
import { ProfileDataFormRedux } from './profileDataForm';
import { Navigate, useNavigate } from 'react-router-dom';



let Info = ({ isOwner, profile, status, updateStatus, saveProfile,isAuth }) => {
    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return Preloader
    }
    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false)
            }
        )
    }
    return (
        <div className={s.background}>
            <div className={s.info}>

                <div className={s.name}>
                    <span className={s.firstName}>{profile.fullName}</span>
                </div>

                <div className={s.status}>
                    <ProfileStatusWithHook status={status} updateStatus={updateStatus} />
                </div>

                <div className={s.links}>
                    <div className={s.city}>
                        <a href="">
                            <Location className={s.image} />
                        </a>
                        <a className={s.link}>Город</a>
                    </div>

                    <div className={s.uni}>
                        <a href="">
                            <Work className={s.image} />
                        </a>
                        <a className={`${s.link} ${s.work}`}>Университет</a>
                    </div>

                    <div className={s.else}>
                        <a>
                            <About className={`${s.image} ${s.what}`} />
                        </a>
                        <a className={s.link}>Подробнее</a>
                    </div>
                </div>
            </div>

            <ProfileData isOwner={isOwner} profile={profile} />
        </div>
    )
}

const ProfileData = ({ isOwner, goToEditProfile, profile }) => {
    const navigate = useNavigate();

    const redirect =()=>{
        if (isOwner) {
            navigate("/settings");
        }
    }

    return (
        <div className={s.about}>
            <div className={s.infoTitle}><b>Ищу работу: </b>{profile.lookingForAJob ? 'Да' : 'Нет'}</div>
            <div className={s.infoTitle}><b>Обо мне: </b>{profile.aboutMe}</div>
            <div className={s.infoTitle}><b>Навыки: </b>{profile.lookingForAJobDescription}</div>
            <div className={s.infoTitle}><b>Контакты: </b>{Object.keys(profile.contacts).map(key => {
                return <Contact contactTitle={key} contactValue={profile.contacts[key]} />
            })}</div>
         {isOwner && <div>
                <button className={s.editButton} onClick={redirect}>Настроить профиль</button>
            </div>}
        </div>
    )
}




const Contact = ({ contactTitle, contactValue }) => {
    return <div className={s.contact}>{contactTitle}:{contactValue}</div>
}

export default Info