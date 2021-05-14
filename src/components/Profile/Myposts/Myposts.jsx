import style from './Myposts.module.css'
import Post from './Posts/Post'

const Myposts = () => {

    let posts = [
        { id: 1, post: 'Hi, how are you?', countslike: 15 },
        { id: 1, post: 'I am OK', countslike: 30 }
    ]

    let postsElement = posts.map(
        p => <Post message={p.post} countslike={p.countslike} />
    )
    return (
        <div className={style.content}>
            <div>My post</div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
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