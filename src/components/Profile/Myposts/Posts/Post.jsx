import style from './Post.module.css'

const Post = (props) => {
    return (
        <div className={style.item}>
            <img src='./img/logo.png'></img>
            <div>{props.post} Like:  {props.countslike}</div>

        </div>
    )
}

export default Post;