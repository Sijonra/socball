import React from 'react';
import style from './dialog.module.css';
import Message from "./Message/Message";

const Dialog = props =>{

    let message = React.createRef();


    const addInputText = () =>{
        let currentMessage = message.current.value;
        props.handleInputChange(currentMessage);
    }

    const addMessage = () =>{
        props.handleMessageSubmit();
    }

    return(
        <div className={style.dialog}>
            {props.state.dialogsPage.messages.map( message =>{
                return <Message message={message.text} />
            } )}

            <div className={style.inputForm}>
                <input type="text" onChange={addInputText} ref={message} value={props.state.dialogsPage.newMessageText}/>
                <input type="submit" onClick={addMessage}/>
            </div>
        </div>
    )
}

export default Dialog;