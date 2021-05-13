import style from './Myposts.module.css'
import Post from './Posts/Post'

const Myposts = () => {
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
                <Post message='Hi, how are you?' countslike='15' />
                <Post message='I am OK' countslike='20' />
            </div>


        </div >
    )
}

export default Myposts;