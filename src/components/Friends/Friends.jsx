import Friend from './Friend/Friend'
import React from 'react';

const Friends = (props) => {

    let friendElement = props.friendsPage.friends.map(
        f => <Friend name={f.name} key={f.id} />
    )

    let newPostElement = React.createRef();

    let addName = () => {
        props.addName()
    }

    let updateFriendNameText = () => {
        let newTextName = newPostElement.current.value
        props.updateName(newTextName)
    }

    return (
        <div>
            <div>Add friend</div>
            <div>
                <textarea ref={newPostElement} onChange={updateFriendNameText} value={props.friendsPage.textName}></textarea>
            </div>
            <div>
                <button onClick={addName}>Add friend</button>
            </div>
            <div><button>
                Remove
        </button></div>
            <div>
                {friendElement}
            </div>
        </div>

    )
}

export default Friends