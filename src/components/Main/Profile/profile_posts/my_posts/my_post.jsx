import React from 'react';
import s from './my_post.module.css'
import PostBottom from './post_bottom/post_bottom';
import PostContent from './post_content/post_content';
import PostTop from './post_top/post_top';



let MyPost = (props) =>{
    return(
        <div className={s.container}>
            <PostTop ava={props.ava} name={props.name} date={props.date}   />
            <PostContent text={props.text} image={props.image} />
            <PostBottom likeCounter = {props.likeCounter}/>
        </div>
    )
}

export default MyPost