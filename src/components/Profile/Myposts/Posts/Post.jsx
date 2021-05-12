import style from './Post.module.css'

const Post = (props) => {
    return (
        <div className={style.item}>
            <img src='./img/logo.png'></img>
            <div>{props.message}, {props.countslike}</div>
            <span>Like</span>
        </div>
    )
}

export default Post;