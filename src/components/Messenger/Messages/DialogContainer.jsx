import React from 'react';
import Dialog from "./Dialog";
import {addNewMessageActionCreator, addNewMessageTextActionCreator} from "../../../redux/redux-store";
import {connect} from "react-redux";
import message from "./Message/Message";

// const DialogContainer = props =>{
//
//     let state = props.store.getState();
//
//     const handleMessageSubmit = () => {
//         if(state.newMessageText !== ''){
//             props.store.dispatch(addNewMessageActionCreator('ADD-MESSAGE', state.dialogsPage.newMessageText));
//         }
//         state.dialogsPage.newMessageText = '';
//     }
//
//     const handleInputChange = (message) => {
//         props.store.dispatch(addNewMessageTextActionCreator('ADD-MESSAGE-TEXT', message));
//     }
//
//     return(
//         <Dialog
//             state={state}
//             handleMessageSubmit={handleMessageSubmit}
//             handleInputChange={handleInputChange}
//         />
//     )
//
// }

let mapStateToProps = state => {
    return(
        {state: state}
    )
}

let mapDispatchToProps = (dispatch, ownProps) =>{
    return(
        {
            handleInputChange: (text) => {
                dispatch(addNewMessageTextActionCreator(text))
            },
            handleMessageSubmit: () => {
                dispatch(addNewMessageActionCreator())
            }
        }
    )
}

let DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);

export default DialogContainer;