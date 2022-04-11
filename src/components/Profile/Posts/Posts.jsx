import React from "react";
import style from './posts.module.css'
import Post from "./Post/Post";

const Posts = props =>{

    let newPostElement = React.createRef();

    let handlePostInputChange = () =>{
        let text = newPostElement.current.value;
        props.addNewPostText(text);
    }

    let handlePostSubmit = (event) =>{
        let text = newPostElement.current.value;
        event.preventDefault()
        if(text !== ''){
            //props.addPost(text, 0)
            props.addPost(props.newPostText, 0)
            text = '';
        }
    }

    return(
        <section className={style.posts}>
            <form onSubmit={handlePostSubmit} className={style.inputForm} >
                <textarea
                    type="text"
                    ref={newPostElement}
                    onChange={handlePostInputChange}
                    className={style.input}
                    value={props.newPostText}
                />
                <input type="submit" value="Submit" className={style.submit} />
            </form>
            {props.posts.map(post=>{
               return <Post text={post.text} likesCount={post.likesCount} />
            })}
        </section>
    )
}

export default Posts;