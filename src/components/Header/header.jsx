import React from 'react';
import s from './header.module.css'
import { NavLink } from 'react-router-dom';

let Header = (props) => {
    // alert(props.isAuth)
    return (
        <div className={s.container}>
            <div className={s.logo}>
                <img src='https://www.svgrepo.com/show/303449/vk-1-logo.svg' className={s.img} />
                <h2 className={s.title}>ВКОНТАКТЕ</h2>
            </div>

            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div className={s.account}>
                        {/* <img src={props.profile.photos.small} /> */}
                        <div>{props.login}</div>
                        <NavLink  to={'/login'} onClick={props.logout}>Выйти</NavLink>
                    </div>
                    : <NavLink to={'/login'}>Войти</NavLink>}


            </div>

        </div>
    )
}

export default Header