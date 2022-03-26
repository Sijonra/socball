import style from './post.module.css'
import Avatar from "../../../Avatar";

const Post = props =>{
    return(
        <div className={style.post} >
            <Avatar />
            <p className={style.text}>post text</p>
            <span className={style.likes}>likes {props.likesCount}</span>
        </div>
    )
}

export default Post;