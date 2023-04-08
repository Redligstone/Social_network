import React from "react";
import preloader from '../../../assets/preloader/preloader_trans.gif'
import s from './preloader.module.css'

let Preloader = () =>{
    return(
        <div className={s.preloader}> 
           <img src={preloader} className={s.preloaderImg}/>
        </div>
    )
}


export default Preloader