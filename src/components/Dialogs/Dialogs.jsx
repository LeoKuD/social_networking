import DialogsItems from './Dialogitems/Dialogitems'
import style from './Dialogs.module.css'
import MessagesItems from './MessagesItems/Messagesitems'
import React from 'react';
import { Redirect } from 'react-router';
import { DialogsForm } from './DialogsForm';

const Dialogs = (props) => {

    let dialogElements = props.dialogsPage.dialogs.map(
        d => <DialogsItems name={d.name} id={d.id} key={d.id} />
    )

    let messageElement = props.dialogsPage.messages.map(
        m => <MessagesItems messages={m.message} key={m.id} />
    )

    let newMessageElement = React.createRef()

    let addMessage = (data) => {
        props.addMessage(data)
    }
    if (!props.isAuth) {
        return <Redirect to='/login' />
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogElements}
            </div>

            <div className={style.messages}>
                {messageElement}
                <div>
                    <DialogsForm addMessage={props.addMessage} />
                </div>
            </div>

        </div>
    )
}

export default Dialogs