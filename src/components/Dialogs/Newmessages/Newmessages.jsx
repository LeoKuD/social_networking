import React from 'react';
import { addMessageActionCreator, updateTextMessageActionCreator } from '../../../Redux/State/State'

const NewMessages = (props) => {

    let newMessageElement = React.createRef()

    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    let updateTextMessage = () => {
        let text = newMessageElement.current.value
        props.dispatch(updateTextMessageActionCreator(text))
    }

    return (
        <div>
            <div
            ><textarea onChange={updateTextMessage} value={props.messagesPage.newTextMessage} ref={newMessageElement} cols="30" rows="10"></textarea>
            </div>

            <div>
                <button onClick={addMessage}>add message</button>
            </div>

        </div>
    )
}

export default NewMessages