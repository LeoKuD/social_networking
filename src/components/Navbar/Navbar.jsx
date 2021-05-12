import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <ul>
                <li> <NavLink to='/Profile' activeClassName={style.active}> Profile </NavLink> </li>
                <li><NavLink to='/Dialogs' activeClassName={style.active}> Messages </NavLink> </li>
                <li><NavLink to='/News' activeClassName={style.active}> News </NavLink> </li>
                <li><NavLink to='/Music' activeClassName={style.active}> Music </NavLink> </li>
                <li><NavLink to='/Settings' activeClassName={style.active}> Settings </NavLink> </li>
            </ul>
        </nav >
    )
}

export default Navbar;
