import style from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.dialog + ' ' + style.active}> Andrey </div>
                <div className='dialog'> Dima </div>
                <div className='dialog'> Oly </div>
                <div className='dialog'> Pasha </div>
            </div>
            <div className='messages'>
                <div className='message'>Hi how are ypo?</div>
                <div className='message'>Do ypo speak english?</div>
                <div className='message'>Yo</div>
            </div>
        </div>
    )
}

export default Dialogs