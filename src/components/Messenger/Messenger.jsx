import style from './messanger.module.css';
import Dialogs from './Dialogs/Dialogs'
import DialogContainer from "./Messages/DialogContainer";

const Messenger = props => {

    return (
        <section className={style.messanger} >
            <Dialogs
                state={props.state}
            />
            <DialogContainer store={props.store} />
        </section>
    )
}

export default Messenger;