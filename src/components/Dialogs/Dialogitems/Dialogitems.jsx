import { NavLink } from 'react-router-dom'
import style from '.././Dialogs.module.css'

const DialogsItems = (props) => {
    let path = '/dialogs/' + props.id
    let name = props.name
    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}

export default DialogsItems