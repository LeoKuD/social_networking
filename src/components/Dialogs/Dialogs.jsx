import { NavLink } from 'react-router-dom'
import style from './Dialogs.module.css'

const DialogsItems = (props) => {
    let path = '/dialogs/' + props.id
    let name = props.name
    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}

const MessagesItems = (props) => {
    let message = props.message
    return (
        <div className={style.message}>{message}</div>
    )
}


const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogsItems name='Andrey' id='1' />
                <DialogsItems name='Dima' id='2' />
                <DialogsItems name='Oly' id='3' />
                <DialogsItems name='Pasha' id='4' />
            </div>
            <div className={style.messages}>
                <MessagesItems message='Hi how are you?' />
                <MessagesItems message='Do ypo speak english?' />
                <MessagesItems message='Yo?' />
                <MessagesItems message='i learn react?' />
            </div>
        </div>
    )
}

export default Dialogs