// import React  from 'react';
// import s from './info.module.css'
// import { reduxForm } from 'redux-form';
// import { Input, Textarea, createField } from '../../../../common/formControls/formControls';


// const ProfileDataForm = ({handleSubmit,profile,error}) =>{
//     // console.log(initialValues)
//     return (
//         <form className={s.form} onSubmit={handleSubmit}>
//              <div>
//                 <span>Ищу работу</span>
//                 {createField('', 'lookingForAJob', [], Input, {type:"checkbox"},)}
//             </div> 
             
//              <div>
//                 <span>Мои навыки</span>
//                 {createField('Мои навыки','lookingForAJobDescription', [], Textarea, {value:'хуявыки'} )}
//             </div> 
             
//              <div>
//                 <span>Обо мне</span>
//                 {createField('Обо мне', 'AboutMe', [], Textarea, )}
//             </div>

//              <div>
//                 <span>Имя</span>
//                 {createField('', 'fullName', [], Textarea, )}
//             </div> 
//             <div><b>Контакты:</b>{Object.keys(profile.contacts).map(key =>{
//                     return <div key={key} className={s.contact}>
//                         {<b>{key}: {createField(key, 'contacts.'+ key, [], Input, )}</b>}
//                     </div>
//                 })}</div>
//             <button>Сохранить</button>
//             {error &&
//                 <div className={s.formSummaryError}>
//                 {error}
//             </div>
//             }
//         </form>
//     )
// }

// export const ProfileDataFormRedux = reduxForm(
//     {
//         form:'profile-data',
//         enableReinitialize : true,
//         // initialValues:initialValues,
//     }
// )(ProfileDataForm)
