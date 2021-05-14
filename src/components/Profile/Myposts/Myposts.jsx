import style from './Myposts.module.css'
import Post from './Posts/Post'

const Myposts = (props) => {


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
                {props.postElem}
            </div>


        </div >
    )
}

export default Myposts;