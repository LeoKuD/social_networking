import DialogsItems from './Dialogitems/Dialogitems'
import style from './Dialogs.module.css'
import MessagesItems from './MessagesItems/Messagesitems'
import React from 'react';

const Dialogs = (props) => {

    let dialogElements = props.dialogsPage.dialogs.map(
        d => <DialogsItems name={d.name} id={d.id} key={d.id} />
    )

    let messageElement = props.dialogsPage.messages.map(
        m => <MessagesItems messages={m.message} key={m.id} />
    )

    let newMessageElement = React.createRef()

    let addMessage = () => {
        props.addMessage()
    }

    let updateTextMessage = () => {
        let text = newMessageElement.current.value
        props.updateTextMessage(text)
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogElements}
            </div>

            <div className={style.messages}>
                {messageElement}<div>
                    <div>
                        <textarea onChange={updateTextMessage} value={props.NewMessagesText} ref={newMessageElement} cols="30" rows="10"></textarea>
                    </div>

                    <div>
                        <button onClick={addMessage}>add message</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dialogs