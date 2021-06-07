import style from './Header.module.css'
import logo from '../../img/logo.png'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
    return (
        <header className={style.header}>
            <img src={logo} alt="" />
            <div className={style.login}> {props.isAuth ? props.login : <NavLink to='/login'>login</NavLink>} </div>
        </header>
    )
}

export default Header;
