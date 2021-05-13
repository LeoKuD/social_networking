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

    let dialogsData = [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Dima' },
        { id: 4, name: 'Oly' },
        { id: 5, name: 'Pasha' }
    ]

    let messagesData = [
        { id: 1, message: 'Hi how are you?' },
        { id: 2, message: 'Do ypo speak english?' },
        { id: 3, message: 'Yo?' },
        { id: 4, message: 'I learn react?' },
    ]
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogsItems name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogsItems name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogsItems name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogsItems name={dialogsData[3].name} id={dialogsData[3].id} />
            </div>
            <div className={style.messages}>
                <MessagesItems message={messagesData[0].message} />
                <MessagesItems message={messagesData[1].message} />
                <MessagesItems message={messagesData[2].message} />
                <MessagesItems message={messagesData[3].message} />
            </div>
        </div>
    )
}

export default Dialogs