import React from 'react';
import { addMessageActionCreator, updateTextMessageActionCreator } from '../../Redux/State/Dialog-Page-Reducer';
import StoreContext from '../../Redux/StoreContext';
import Dialogs from './Dialogs';

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState()

                    let addMessage = () => {
                        store.dispatch(addMessageActionCreator())
                    }

                    let updateTextMessage = (text) => {
                        store.dispatch(updateTextMessageActionCreator(text))
                    }
                    return <Dialogs addMessage={addMessage} updateTextMessage={updateTextMessage}
                        NewMessagesText={state.messagesPage.newTextMessage} dialogsPage={state.messagesPage} />
                }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer