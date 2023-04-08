import React from 'react';
import s from './users.module.css'
import Paginator from '../../common/paginator/paginator';
import User from './user';


let Users = ({ currentPage, onPageChanged, totalUsersCount, pageSize, ...props }) => {
    return (
        <div className={s.wrapper}>
            <div className={s.content_container}>
                <div className={s.people_title}>Люди {totalUsersCount}</div>
                {props.users.map((u) => <User followingInProgress={props.followingInProgress} key={u.id} user={u} follow={props.follow} unfollow={props.unfollow} />
                )}
                <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount} pageSize={pageSize} />
            </div >
        </div>
    )
}


export default Users

