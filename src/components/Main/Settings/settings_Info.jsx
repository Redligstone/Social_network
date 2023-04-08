import React, { useState } from 'react';
import s from './settings.module.css'
import Preloader from '../../common/preloader/preloader';
import SettingsData from './settings';
import { SettingsDataFormRedux } from './settings_Form';

const SettingsInfo = (props) => {

    const [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return Preloader
    }
    const onSubmit = (formData) => {
        props.saveProfile(formData).then(
            () => {
                setEditMode(false)
            }
        )
    }

    return (
        <div className={s.about}>
            {editMode ? <SettingsDataFormRedux onSubmit={onSubmit} profile={props.profile}/> : <SettingsData isOwner={props.isOwner} goToEditProfile={()=>{setEditMode(true)}} profile={props.profile}/>}
        </div>
    )
}
const Contact = ({ contactTitle, contactValue }) => {
    return <div className={s.contact}>{contactTitle}:{contactValue}</div>
}
export default SettingsInfo