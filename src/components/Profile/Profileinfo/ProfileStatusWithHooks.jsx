import style from './ProfileInfo.module.css'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)
    const statusEditActivate = () => {
        setEditMode(true)
    }

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const statusEditDeactivate = () => {
        setEditMode(false)
        props.updateStatusProfile(status)
    }
    const onChangeStatus = (e) => {
        setStatus(e.currentTarget.value)
    }
    return (
        < div >
            {editMode ?
                <div>
                    <input
                        value={status}
                        onChange={onChangeStatus}
                        onBlur={statusEditDeactivate}
                        autoFocus={true}
                        type="text" />
                </div> :
                < div >
                    <span onDoubleClick={statusEditActivate} >{status || '----'}</span>
                </div >
            }

        </div >
    )
}

export default ProfileStatusWithHooks
