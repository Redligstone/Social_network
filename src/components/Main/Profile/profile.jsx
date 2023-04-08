import React from 'react';
import { Navigate } from 'react-router-dom';
import s from './../Profile/profile.module.css'
import ProfileHeader from './profile_header/profile_header';
import ProfilePosts from './profile_posts/profile_posts';


let Profile = React.memo(props =>{
    // if(!props.isAuth){
    //     return <Navigate to={'/login'}/>
    // }
    return(
        <div className={s.content}>
            <ProfileHeader profile={props.profile} status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner} savePhoto={props.savePhoto} saveProfile={props.saveProfile}/>
            <ProfilePosts posts={props.posts} isOwner={props.isOwner} profile={props.profile}/>
        </div>
    )
})

export default Profile