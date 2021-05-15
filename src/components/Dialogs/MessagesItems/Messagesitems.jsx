import style from '.././Dialogs.module.css'

const MessagesItems = (props) => {
    return (
        <div className={style.message}>
            {props.messages}
        </div>
    )
}

export default MessagesItems