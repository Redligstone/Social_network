import React from 'react';
import s from './post_bottom.module.css'


let PostBottom = (props) =>{
    return(
        <div className={s.container}>
            <a className={s.link}>
            <img src="https://cdn.iconscout.com/icon/free/png-512/favorite-12-83563.png?f=avif&w=256" alt="" className={s.img} />
            <span className={s.likeCounter}>
                {props.likeCounter}
            </span>
            </a> 
        </div>
    )
}

export default PostBottom