import React from "react";
import {addNewPostTextActionCreator, addPostActionCreator} from '../../../redux/profilePageReducer'
import Posts from "./Posts";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
    return{
        profilePage: state.profilePage,
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        handlePostInputChange: (text) => {
            dispatch(addNewPostTextActionCreator(text));
        },
        handlePostSubmit: () =>{
            dispatch(addPostActionCreator(0))
        },
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;