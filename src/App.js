import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import state from './Redux/State/State'
import Navbar from './components/Navbar/Navbar';

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar state={state.friendsPage} />
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile state={props.state.progilePage} />} />
                    <Route path='/dialogs' render={() => <Dialogs state={props.state.messagesPage} />} />
                    <Route path='/news' render={() => <News />} />
                    <Route path='/music' render={() => <Music />} />
                    <Route path='/settings' render={() => <Settings />} />
                    <Route path='/friends' render={() => <Friends state={state.friendsPage} />} />
                </div>
            </div>
        </BrowserRouter>

    )
}

export default App;
