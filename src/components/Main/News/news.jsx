import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../HOC/withAuthRedirect';
import s from './news.module.css'


let News = (props) =>{
    return(
        <div className={s.content}>
        <img src={require('./../Profile/profile_header/background/images/guys.JPG')} className={s.img}/>
        сук
        </div>
    )
}
let mapStateToProps = (state) =>({
    isAuth:state.auth.isAuth,  
})
compose(
    connect(mapStateToProps),
    withAuthRedirect)
    (News)

export default News