import style from './posts.module.css'
import Post from "./Post/Post";

const Posts = props =>{
    return(
        <section className={style.posts}>
            <Post likesCount={1}/>
            <Post likesCount={3}/>
            <Post likesCount={0}/>
        </section>
    )
}

export default Posts;