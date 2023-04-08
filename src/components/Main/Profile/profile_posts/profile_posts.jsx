import React from 'react';
import MyPost from './my_posts/my_post';

import NewPostContainer from './new_post/new_post_Container';
import s from './profile_posts.module.css'


let ProfilePosts = (props) =>{
    let postItems = props.posts.map(p => { 
        return (<MyPost ava={p.ava} name={p.name} date={p.date} text={p.text} image={p.image} likeCounter={p.likeCounter} />)  }) 
        debugger
    return(
        <div className={s.container}>
            <NewPostContainer isOwner={props.isOwner} profile={props.profile}/>
            {postItems}
            
        </div>
    )
    
}

export default ProfilePosts