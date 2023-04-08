import React from 'react';
import s from './sidebar.module.css'
import { ReactComponent as Profile } from './icons/profile.svg';
import { ReactComponent as Music } from './icons/music.svg';
import { ReactComponent as Settings } from './icons/settings.svg';
import { NavLink } from 'react-router-dom';


let Sidebar = (props) => {

    return (
        <div className={s.wrapper}>


            <NavLink to="/profile"
                className={s.link}>
                <div className={s.page}>
                    <Profile className={s.image} />
                    <span>Моя страница</span>
                </div>
            </NavLink>

            {/* <NavLink to="/news" className={`${s.link} ${s.new}`}>
                <div className={s.page}>
                <img src={require('./icons/news.png')} className={`${s.image} ${s.news}`} />
                <span>Новости</span>
                </div>
                </NavLink> */}

            <NavLink to="/messages" className={s.link}>
                <div className={s.page}>
                    <img src={require('./icons/messages.png')} className={s.image} />
                    <span>Сообщения</span>
                </div>
            </NavLink>

            {/* <NavLink to="/music" className={s.link}>
                <div className={s.page}>
                <Music className={s.image}/>
                <span>Музыка</span>
                </div>
                </NavLink> */}

            <NavLink to="/users" className={s.link}>
                <div className={s.page}>
                    <img src='https://cdn-icons-png.flaticon.com/512/880/880543.png' className={s.image} />
                    <span>Люди</span>
                </div>
            </NavLink>

            <NavLink to="/settings" className={s.link}>
                <div className={s.page}>
                    <Settings className={s.image} />
                    <span>Настройки</span>
                </div>
            </NavLink>


        </div>
    )
}

export default Sidebar