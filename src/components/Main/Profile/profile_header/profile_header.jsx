import React from 'react';
import Background from './background/background';
import Info from './info/info';
import Picture from './picture/picture';
import s from './profile_header.module.css'

let ProfileHeader = (props) => {
    return (
        <div className={s.content}>
            {/* <Background profile={props.profile} /> */}
            <div className={s.info}>
                <Picture className={s.pic} profile={props.profile} isOwner={props.isOwner} savePhoto={props.savePhoto} />
                <Info isOwner={props.isOwner} className={s.text} profile={props.profile} status={props.status} updateStatus={props.updateStatus} saveProfile={props.saveProfile} />
            </div >
        </div>
    )
}

export default ProfileHeader