import React from 'react';

const NewMessages = (props) => {

    let newMessageElement = React.createRef()

    let addMessage = () => {
        let text = newMessageElement.current.value
        alert(text)
    }

    return (
        <div>
            <div
            ><textarea ref={newMessageElement} cols="30" rows="10"></textarea>
            </div>

            <div>
                <button onClick={addMessage}>add message</button>
            </div>

        </div>
    )
}

export default NewMessages