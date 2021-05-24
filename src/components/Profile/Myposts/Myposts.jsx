import style from './Myposts.module.css'
import Post from './Posts/Post'
import React from 'react';

const Myposts = (props) => {

    let postsElement = props.progilePage.posts.map(
        p => <Post post={p.post} countslike={p.countslike} />
    )

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost()
    }

    let updatePostText = () => {
        let text = newPostElement.current.value
        props.updatePost(text)
    }

    return (
        <div className={style.content}>
            <div>My post</div>
            <div>
                <textarea ref={newPostElement} onChange={updatePostText} value={props.progilePage.textPost}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div><button>
                Remove
            </button></div>
            <div className={style.postItem}>
                {postsElement}
            </div>


        </div >
    )
}

export default Myposts;