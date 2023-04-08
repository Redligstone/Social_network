import React  from 'react';
import s from './settings.module.css'
import { reduxForm } from 'redux-form';
import { Input, Textarea, createField } from '../../common/formControls/formControls';


const SettingsDataForm = ({handleSubmit,profile,error}) =>{
    console.log(profile.fullName)
    debugger
    return (
        <form className={s.form} onSubmit={handleSubmit}>
            <div>
                <span><b>Имя</b></span>
                {createField('Моё имя', 'fullName',profile.fullName, [], Input )}
            </div> 

             <div className={s.lookingForAJob}>
                <span><b>Ищу работу</b></span>
                {createField('', 'lookingForAJob', '',[], Input, {type:"checkbox"})}
            </div> 
             
             <div>
                <span><b>Мои навыки</b></span>
                {createField('Мои навыки','lookingForAJobDescription', '',[], Textarea, {value:'хуявыки'} )}
            </div> 
             
             <div>
                <span><b>Обо мне</b></span>
                {createField('Обо мне', 'AboutMe', '',[], Textarea )}
            </div>

             
            <div><b>Контакты:</b>{Object.keys(profile.contacts).map(key =>{
                    return <div key={key} className={s.contactForm}>
                        {<b>{key}: {createField(key, 'contacts.'+ key, '',[], Input )}</b>}
                    </div>
                })}</div>
            <button className={s.saveButton}>Сохранить</button>
            {error &&
                <div className={s.formSummaryError}>
                {error}
            </div>
            }
        </form>
    )
}

export const SettingsDataFormRedux = reduxForm(
    {
        form:'profile-data',
    }
)(SettingsDataForm)