import React from 'react';
import Preloader from '../../../../common/preloader/preloader';
import s from './background.module.css'

let Background = (props) =>{
    if(!props.profile) {
        return Preloader
    }

    return(
        <div className={s.background}>
            {/* <img src={props.profile.photos.large} className={s.img}/> */}
            <img src={require('./images/guys.JPG')} className={s.img}/>
        </div>
    )
}

export default Background