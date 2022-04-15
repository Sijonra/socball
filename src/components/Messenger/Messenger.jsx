import style from './messanger.module.css';
import Dialogs from './Dialogs/Dialogs'
import Dialog from "./Messages/Dialog";

const Messenger = props => {

    return (
        <section className={style.messanger} >
            <Dialogs
                state={props.state}
            />
            <Dialog
                state={props.state}
                dispatch={props.dispatch}
            />
        </section>
    )
}

export default Messenger;