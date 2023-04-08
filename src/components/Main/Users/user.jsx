import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './users.module.css'


let User = ({ user, followingInProgress, follow, unfollow, ...props }) => {

    return (
        <div>
            <div className={s.user_container}>
                <div className={s.ava_container}>
                    <NavLink to={'/profile/' + user.id}><img className={s.image} src={user.photos.small != null ? user.photos.small : 'https://termosfera.su/wp-content/uploads/2022/04/2816616767_vubrbej.jpg'} />
                    </NavLink >
                </div>

                <div className={s.info_container}>
                    <div className={s.name}><NavLink to={'/profile/' + user.id} className={s.name}>{user.name}</NavLink></div>
                    <a href='#' className={s.location}>{"userProps.country}, {userProps.city"}</a>
                    <div className={s.status}>{user.status}</div>
                </div>

                <div className={s.button_container}>
                    {user.followed
                        ? <button href="#" disabled={followingInProgress.some(id => id === user.id)} className={s.button}
                            onClick={() => { unfollow(user.id) }}>
                            Отписаться
                        </button>
                        :
                        <button href="#" disabled={followingInProgress.some(id => id === user.id)} className={s.button}
                            onClick={() => { follow(user.id) }}>
                            Подписаться
                        </button>
                    }
                </div>
            </div>
        </div >
    )
}

export default User

