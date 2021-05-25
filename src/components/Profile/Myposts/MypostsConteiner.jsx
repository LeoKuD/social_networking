import React from 'react';
import Myposts from './Myposts';
import { addPostActionCreator, updatePostActionCreator } from '../../../Redux/State/Profile-Page-Reducer'
import StoreContext from '../../../Redux/StoreContext';

const MypostsConteiner = () => {


    return (
        <StoreContext.Consumer >
            {
                (store) => {
                    let state = store.getState()

                    let addPost = () => {
                        store.dispatch(addPostActionCreator())
                    }

                    let updatePostText = (text) => {
                        store.dispatch(updatePostActionCreator(text))
                    }
                    return <Myposts updatePost={updatePostText} addPost={addPost} progilePage={state.progilePage} />
                }
            }

        </StoreContext.Consumer>
    )
}

export default MypostsConteiner;