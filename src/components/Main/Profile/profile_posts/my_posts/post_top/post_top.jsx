import React from 'react';
import s from './post_top.module.css'


let PostTop = (props) =>{
    return(
        <div className={s.container}>
            <a href='#'>
                <img src={props.ava} alt="" className={s.ava}/>
            </a>

            <div className={s.title}>
                <a className={s.name}>{props.name}</a>
                <a className={s.data}>{props.date}</a>
            </div>
            <a><img src="https://cdn.iconscout.com/icon/free/png-512/dots-10-433568.png?f=avif&w=256" alt="" className={s.options}/></a>
        </div>
    )
}

export default PostTop