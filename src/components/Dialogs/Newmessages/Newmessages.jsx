import React from 'react';

const NewMessages = (props) => {

    let newMessageElement = React.createRef()

    let addMessage = () => {
        props.dispatch({ type: 'ADD-MESSAGE' })
    }

    let updateTextMessage = () => {
        let text = newMessageElement.current.value
        props.dispatch({ type: 'UPDATE-NEW-MESSAGE', newMessage: text })
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