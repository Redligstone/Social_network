import React, { useEffect, useState } from 'react';
import s from './info.module.css'


const ProfileStatusWithHook = (props) => {

let [editMode,setEditmode] = useState(false)
let [status,setStatus] = useState(props.status)

useEffect(()=>{
    setStatus(props.status)
},[props.status])

const activateEditMode = () =>{
    setEditmode(true)
}
const deactivateEditMode = () =>{
    setEditmode(false)
    props.updateStatus(status);
}
const onStatusChange = (e) =>{
    setStatus(e.currentTarget.value)
}


    return (
        <>  {!editMode &&
            <div className={s.content}>
                <p className={s.content_status} onDoubleClick={activateEditMode}>{props.status || 'No status'}</p>
            </div>
        }
            {editMode &&
                <div className={s.content}>
                    <textarea onChange={onStatusChange} type="text" onBlur={deactivateEditMode} value={status}/>
                </div>
            }
        </>
    )
}

export default ProfileStatusWithHook