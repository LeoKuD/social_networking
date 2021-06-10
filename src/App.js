import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Navbar from './components/Navbar/Navbar';
import FriendsContainer from './components/Friends/FriendsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileComponent from './components/Profile/ProfileContainer';
import HeaderComponent from './components/Header/HeaderContainer';
import Login from './components/Login/Login';

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderComponent />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?' render={() => <ProfileComponent />} />
                    <Route path='/dialogs' render={() => <DialogsContainer />} />
                    <Route path='/news' render={() => <News />} />
                    <Route path='/music' render={() => <Music />} />
                    <Route path='/settings' render={() => <Settings />} />
                    <Route path='/friends' render={() => <FriendsContainer />} />
                    <Route path='/users' render={() => <UsersContainer />} />
                    <Route path='/login' render={() => <Login />} />
                </div>
            </div>
        </BrowserRouter>

    )

}

export default App;

