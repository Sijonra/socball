import style from './post.module.css'
import Avatar from "../../../Avatar";



const Post = props =>{
    return(
        <div className={style.post} >
            <div className={style.avatar}><Avatar className={style.avatar} /></div>
            <span className={style.likes}>likes {props.likesCount}</span>
            <p className={style.text}>{props.text}</p>

        </div>
    )
}

export default Post;