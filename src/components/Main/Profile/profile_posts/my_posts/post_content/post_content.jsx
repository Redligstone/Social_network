import React from 'react';
import s from './post_content.module.css'

let PostContent = (props) =>{
    return(
        <div className={s.container}>
            <div className={s.text}>
            {props.text.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
            ))}
            </div>
            <dv className={s.imgWrap}><img src={props.image} alt="" className={s.image} /></dv >
        </div>
    )
}

export default PostContent