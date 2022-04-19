import React from 'react';
import Dialog from "./Dialog";
import {addNewMessageActionCreator, addNewMessageTextActionCreator} from "../../../redux/state";

const DialogContainer = props =>{

    let state = props.store.getState();

    const handleMessageSubmit = () => {
        if(state.newMessageText !== ''){
            props.store.dispatch(addNewMessageActionCreator('ADD-MESSAGE', state.dialogsPage.newMessageText));
        }
        state.dialogsPage.newMessageText = '';
    }

    const handleInputChange = (message) => {
        props.store.dispatch(addNewMessageTextActionCreator('ADD-MESSAGE-TEXT', message));
    }

    return(
        <Dialog
            state={state}
            handleMessageSubmit={handleMessageSubmit}
            handleInputChange={handleInputChange}
        />
    )

}

export default DialogContainer;