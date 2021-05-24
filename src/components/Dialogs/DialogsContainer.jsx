import React from 'react';
import { addMessageActionCreator, updateTextMessageActionCreator } from '../../Redux/State/Dialog-Page-Reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    let state = props.store.getState()

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    let updateTextMessage = (text) => {
        props.store.dispatch(updateTextMessageActionCreator(text))
    }

    return (
        <Dialogs addMessage={addMessage} updateTextMessage={updateTextMessage}
            NewMessagesText={state.messagesPage.newTextMessage} dialogsPage={state.messagesPage} />
    )
}

export default DialogsContainer