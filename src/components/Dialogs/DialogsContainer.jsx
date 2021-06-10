import { connect } from 'react-redux';
import { addMessageActionCreator, updateTextMessageActionCreator } from '../../Redux/State/Dialog-Page-Reducer';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
    return {
        NewMessagesText: state.messagesPage.newTextMessage,
        dialogsPage: state.messagesPage,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        updateTextMessage: (text) => {
            dispatch(updateTextMessageActionCreator(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer