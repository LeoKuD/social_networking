import DialogsItems from './Dialogitems/Dialogitems'
import style from './Dialogs.module.css'
import MessagesItems from './MessagesItems/Messagesitems'

const Dialogs = (props) => {

    let dialogElements = props.state.dialogs.map(
        d => <DialogsItems name={d.name} id={d.id} />
    )

    let messageElement = props.state.messages.map(
        m => <MessagesItems messages={m.message} />
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