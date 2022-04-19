import React from "react";
import style from './posts.module.css'
import Post from "./Post/Post";

const Posts = props => {

    let newPostElement = React.createRef();

    const addInputText = () =>{
        let text = newPostElement.current.value;
        props.handlePostInputChange(text);
    }

    const addPost = (event) =>{
        event.preventDefault();
        props.handlePostSubmit();
    }

    return(
        <section className={style.posts}>
            <form onSubmit={addPost} className={style.inputForm} >
                <textarea
                    type="text"
                    ref={newPostElement}
                    onChange={addInputText}
                    className={style.input}
                    value={props.state.profilePage.newPostText}
                />
                <input type="submit" value="Submit" className={style.submit} />
            </form>
            {props.state.profilePage.posts.map(post=>{
               return <Post text={post.text} likesCount={post.likesCount} />
            })}
        </section>
    )
}

export default Posts;