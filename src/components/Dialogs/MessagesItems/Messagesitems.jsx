import style from '.././Dialogs.module.css'

const MessagesItems = (props) => {
    let message = props.message
    return (
        <div className={style.message}>{message}</div>
    )
}

export default MessagesItems