import { connect } from 'react-redux'
import { addFriendActionCreator, updateNameTextActionCreator } from '../../Redux/State/Friends-Page-Reduser'
import Friends from './Friends'

let mapStateToProps = (state) => {
    return {
        friendsPage: state.friendsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addName: () => {
            dispatch(addFriendActionCreator())
        },
        updateName: (text) => {
            dispatch(updateNameTextActionCreator(text))
        }

    }
}

let FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default FriendsContainer