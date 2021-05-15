import style from './Friend.module.css'

const Friend = (props) => {

    return (
        <div className={style.friend}>
            <div >
                <a href='#'>
                    <img src='./img/logo.png'></img>
                    <div>{props.name}</div>
                </a>
            </div>
        </div>

    )
}

export default Friend