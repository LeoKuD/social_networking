import Myposts from './Myposts';
import { addPostActionCreator } from '../../../Redux/State/Profile-Page-Reducer'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (data) => {
            dispatch(addPostActionCreator(data))
        }
    }
}
const MypostsConteiner = connect(mapStateToProps, mapDispatchToProps)(Myposts)

export default MypostsConteiner;