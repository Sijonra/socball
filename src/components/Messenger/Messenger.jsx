import style from './messanger.module.css';
import Dialogs from './Dialogs/Dialogs'
import DialogContainer from "./Messages/DialogContainer";
import DialogsContainer from "./Dialogs/DialogsContainer";


const Messenger = props => {

    return (
        <section className={style.messanger} >
            <DialogsContainer />
            <DialogContainer  />
        </section>
    )
}

export default Messenger;