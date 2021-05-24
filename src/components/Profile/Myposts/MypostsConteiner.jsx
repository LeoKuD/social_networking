import React from 'react';
import Myposts from './Myposts';
import { addPostActionCreator, updatePostActionCreator } from '../../../Redux/State/Profile-Page-Reducer'

const MypostsConteiner = (props) => {
    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let updatePostText = (text) => {
        props.store.dispatch(updatePostActionCreator(text))
    }

    return (
        <Myposts updatePost={updatePostText} addPost={addPost} progilePage={state.progilePage} />
    )
}

export default MypostsConteiner;