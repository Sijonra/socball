import React from "react";
import {addNewPostTextActionCreator, addPostActionCreator} from '../../../redux/redux-store'
import Posts from "./Posts";

const PostsContainer = props => {

    let state = props.store.getState();

    let handlePostInputChange = (text) =>{
        props.store.dispatch(addNewPostTextActionCreator('ADD-POST-TEXT', text) )
    }

    let handlePostSubmit = () =>{
        if(state.profilePage.newPostText !== ''){
            props.store.dispatch(addPostActionCreator('ADD-POST', state.profilePage.newPostText, 0))
            state.profilePage.newPostText = '';
        }
    }

    return(
        <Posts
            state={state}
            handlePostInputChange={handlePostInputChange}
            handlePostSubmit={handlePostSubmit}
        />
    )
}

export default PostsContainer;