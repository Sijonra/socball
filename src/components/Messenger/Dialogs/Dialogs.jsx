import style from './dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = props =>{

    return(
        <div className={style.dialogs}>
            {props.state.dialogsPage.dialogs.map( dialog => {
                return(
                    <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
                )
            })}
        </div>
    )

}

export default Dialogs;