import style from './messages.module.css'
import {Link, NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./Dialogs/DialogItem/DialogItem";

const Messages = props => {

    return (
        <section className={style.messages}>
            <div className={style.dialogs}>
                {props.dialogs.map(element=>{
                   return <DialogItem userName={element.name} userId={element.id} />
                })}
            </div>
            <div className={style.messageWrapper}>
                {props.messages.map(element=>{
                    return <Message message={element.message}/>
                })}
            </div>
        </section>
    )
}

export default Messages;