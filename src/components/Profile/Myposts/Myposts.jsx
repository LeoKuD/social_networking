import style from './Myposts.module.css'
import Post from './Posts/Post'

const Myposts = () => {

    let postsData = [
        { id: 1, post: 'Hi, how are you?', countslike: 15 },
        { id: 1, post: 'I am OK', countslike: 30 }
    ]
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
                <Post message={postsData[0].post} countslike={postsData[0].countslike} />
                <Post message={postsData[1].post} countslike={postsData[1].countslike} />
            </div>


        </div >
    )
}

export default Myposts;