import React from 'react';
import Myposts from './Myposts';
import { addPostActionCreator, updatePostActionCreator } from '../../../Redux/State/Profile-Page-Reducer'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        progilePage: state.progilePage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updatePost: (text) => {
            dispatch(updatePostActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}
const MypostsConteiner = connect(mapStateToProps, mapDispatchToProps)(Myposts)

export default MypostsConteiner;