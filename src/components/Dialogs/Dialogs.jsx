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

    let dialogs = [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Dima' },
        { id: 4, name: 'Oly' },
        { id: 5, name: 'Pasha' }
    ]

    let messages = [
        { id: 1, message: 'Hi how are you?' },
        { id: 2, message: 'Do ypo speak english?' },
        { id: 3, message: 'Yo?' },
        { id: 4, message: 'I learn react?' }
    ]

    let dialogElements = dialogs.map(
        d => <DialogsItems name={d.name} id={d.id} />
    )

    let messageElement = messages.map(
        m => <MessagesItems message={m.message} />
    )
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogElements}
            </div>
            <div className={style.messages}>
                {messageElement}
            </div>
        </div>
    )
}

export default Dialogs