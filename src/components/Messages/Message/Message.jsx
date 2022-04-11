import React from "react";
import style from "../messages.module.css";

const Message = props => {

    let text = React.createRef();

    let handleSubmit = (e) =>{
        e.preventDefault();
        alert(text.current.value);
    }

    return (
        <div className={style.message}>
            <p>{props.message}</p>
            <input type="text" ref={text} />
            <input type="submit"  onClick={handleSubmit} />
        </div>
    )
}

export default Message;