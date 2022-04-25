import React from "react";
import {addNewPostTextActionCreator, addPostActionCreator} from '../../../redux/redux-store'
import Posts from "./Posts";
import {connect} from "react-redux";
import {store} from "../../../redux/redux-store";

//import message from "../../Messenger/Messages/Message/Message";

// const PostsContainer = props => {
//
//     let state = props.store.getState();
//
//     let handlePostInputChange = (text) =>{
//         props.store.dispatch(addNewPostTextActionCreator(text))
//     }
//
//     let handlePostSubmit = () =>{
//         if(state.profilePage.newPostText !== ''){
//             props.store.dispatch(addPostActionCreator(state.profilePage.newPostText, 0))
//             state.profilePage.newPostText = '';
//         }
//     }
//
//     return(
//         <Posts
//             state={state}
//             handlePostInputChange={handlePostInputChange}
//             handlePostSubmit={handlePostSubmit}
//         />
//     )
// }

let mapStateToProps = (state) =>{
    return{
        state: state,
    }
}

let mapDispatchToProps = (dispatch, ownProps) =>{
    return{
        handlePostInputChange: (text) => {
            dispatch(addNewPostTextActionCreator(text));
        },
        handlePostSubmit: () =>{
            dispatch(addPostActionCreator(ownProps.store.getState().profilePage.newPostText, 0))
        },
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;