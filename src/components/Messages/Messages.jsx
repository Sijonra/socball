import style from './messages.module.css'
import {Link, NavLink} from "react-router-dom";

const DialogItem = props => {

    let linkPath = './' + props.userId;
    console.log(linkPath);

    return (
        <div className={style.dialog}>
            <Link to={linkPath}>{props.userName}</Link>
        </div>
    )
}

const Message = props => {
    return (
        <div className={style.message}>
            <p>{props.message}</p>
        </div>

    )
}

const Messages = props => {
    return (
        <section className={style.messages}>
            <div className={style.dialogs}>
                <DialogItem userName="Antoha" userId={1} />
                <DialogItem userName="Nikita" userId={2} />
                <DialogItem userName="Egor" userId={3} />
            </div>
            <div className={style.messageWrapper}>
                <Message message='privet' />
                <Message message='hui' />
                <Message message='poka' />
            </div>
        </section>
    )
}

export default Messages;