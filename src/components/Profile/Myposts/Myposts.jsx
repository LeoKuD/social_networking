import style from './Myposts.module.css'
import Post from './Posts/Post'
import React from 'react';
import { MyPostsForm } from './MyPostsForm';



const areEqual = (prevProps, nextProps) => {
    return prevProps === nextProps
}

const Myposts = (props) => {

    console.log('RENDER')

    let postsElement = props.profilePage.posts.map(
        p => <Post post={p.post} countslike={p.countslike} key={p.id} />
    )



    return (

        <div className={style.content}>
            <MyPostsForm addPost={props.addPost} />
            <div><button>
                Remove
            </button></div>
            <div className={style.postItem}>
                {postsElement}
            </div>

        </div >
    )
}

export default React.memo(Myposts, areEqual);