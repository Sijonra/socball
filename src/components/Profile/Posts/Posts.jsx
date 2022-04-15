import React from "react";
import style from './posts.module.css'
import Post from "./Post/Post";
import {addNewPostTextActionCreator, addPostActionCreator} from "../../../redux/state";

const Posts = props =>{

    let newPostElement = React.createRef();

    let handlePostInputChange = () =>{
        let text = newPostElement.current.value;
        //props.store.addNewPostText(text);
        props.dispatch( addNewPostTextActionCreator('ADD-POST-TEXT', text) )
    }

    let handlePostSubmit = (event) =>{
        let text = newPostElement.current.value;
        event.preventDefault()
        if(text !== ''){
            //props.store.addPost(props.state.profilePage.newPostText, 0)
            props.dispatch(addPostActionCreator('ADD-POST', props.state.profilePage.newPostText, 0))
            props.state.profilePage.newPostText = '';
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