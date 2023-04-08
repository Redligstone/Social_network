import React, { Suspense } from 'react';
import s from './main.module.css'
import { Routes, Route } from "react-router-dom";
import News from './News/news';
import MessagesContainer from './Messages/messages_Container';
import UsersContainer from './Users/users_Container';
import ProfileContainer from './Profile/profile_Container';
import Login from '../login/login';
import Preloader from '../common/preloader/preloader';
import Settings from './Settings/settings_Container';
import { ProfileDataFormRedux } from './Profile/profile_header/info/profileDataForm';



let Main = (props) =>{
    return(
        <div className={s.content}>
            <Suspense fallback={<div><Preloader /></div>}>
            <Routes>
                <Route path='/profile/:userId?' element={<ProfileContainer posts={props.profile.posts} />}/>
                
                <Route path='/news/*' element={<News/>}/>
                
                <Route path='/messages/*' 
                element={<MessagesContainer/>}/> 
                
                <Route path='/users/*' 
                element={<UsersContainer />}/> 
                
                <Route path='/login/*' 
                element={<Login />}/> 

                <Route path='/settings/*' 
                element={
                <Settings />}/> 
            </Routes>
            </Suspense>
        </div>
    )
}

export default Main