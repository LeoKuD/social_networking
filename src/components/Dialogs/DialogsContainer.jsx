import { connect } from 'react-redux';
import { compose } from 'redux';
import { addMessageActionCreator, updateTextMessageActionCreator } from '../../Redux/State/Dialog-Page-Reducer';
import { withAuthRedirect } from '../Hoc/withAuthRedirect';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
    return {
        NewMessagesText: state.messagesPage.newTextMessage,
        dialogsPage: state.messagesPage
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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)(Dialogs)
