import style from './Friend.module.css'

const Friend = (props) => {
    return (
        <div className={style.friend}>
            <div >
                <img src='./img/logo.png' alt='ee'></img>
                <div>{props.name}</div>
            </div>
        </div>

    )
}

export default Friend