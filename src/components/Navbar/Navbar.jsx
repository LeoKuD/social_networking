import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css'

const Navbar = (props) => {

    return (
        <div className={style.nav}>
            <nav>
                <ul>
                    <li> <NavLink to='/Profile' activeClassName={style.active}> Profile </NavLink> </li>
                    <li><NavLink to='/Dialogs' activeClassName={style.active}> Messages </NavLink> </li>
                    <li><NavLink to='/News' activeClassName={style.active}> News </NavLink> </li>
                    <li><NavLink to='/Music' activeClassName={style.active}> Music </NavLink> </li>
                    <li><NavLink to='/Settings' activeClassName={style.active}> Settings </NavLink> </li>
                    <li><NavLink to='/Friends' activeClassName={style.active}> Friends </NavLink> </li>
                    <li><NavLink to='/Users' activeClassName={style.active}> Users </NavLink> </li>
                </ul>
            </nav >
            {/* <FriendsContainer /> */}
        </div>

    )
}

export default Navbar;
