import React from 'react';
import style from './dialog.module.css';
import Message from "./Message/Message";
import {addNewMessageActionCreator, addNewMessageTextActionCreator} from "../../../redux/state";

const Dialog = props =>{

    let message = React.createRef();

    const handleMessageSubmit = () => {
        let currentMessage = message.current.value;
        if(currentMessage !== ''){
            props.dispatch(addNewMessageActionCreator('ADD-MESSAGE', currentMessage));
        }
        props.state.dialogsPage.newMessageText = '';
    }

    const handleInputChange = () => {
        let currentMessage = message.current.value;
        props.dispatch(addNewMessageTextActionCreator('ADD-MESSAGE-TEXT', currentMessage));
    }

    console.log(props.state.dialogsPage);

    return(

        <div className={style.dialog}>

            {props.state.dialogsPage.messages.map( message =>{
                return <Message message={message.text} />
            } )}

            <div className={style.inputForm}>
                <input type="text" onChange={handleInputChange} ref={message} value={props.state.dialogsPage.newMessageText}/>
                <input type="submit" onClick={handleMessageSubmit}/>
            </div>

        </div>
    )
}

export default Dialog;