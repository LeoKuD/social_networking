import style from './Myposts.module.css'
import Post from './Posts/Post'

const Myposts = () => {
    return (
        <div className={style.content}>
            <div>My post</div>
            <textarea></textarea>
            <button>Add post</button>
            <button>Remove</button>
            <Post message='Hi, how are you?' countslike='15' />
            <Post message='I am OK' countslike='20' />

        </div>
    )
}

export default Myposts;