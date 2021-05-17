import DialogsItems from './Dialogitems/Dialogitems'
import style from './Dialogs.module.css'
import MessagesItems from './MessagesItems/Messagesitems'
import NewMessages from './Newmessages/Newmessages'

const Dialogs = (props) => {

    let dialogElements = props.messagesPage.dialogs.map(
        d => <DialogsItems name={d.name} id={d.id} />
    )

    let messageElement = props.messagesPage.messages.map(
        m => <MessagesItems messages={m.message} />
    )
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogElements}
            </div>
            <div className={style.messages}>
                {messageElement}
                <NewMessages messagesPage={props.messagesPage}
                    dispatch={props.dispatch} />
            </div>
        </div>
    )
}

export default Dialogs