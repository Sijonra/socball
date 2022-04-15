import style from './dialogItem.module.css';
import {NavLink} from "react-router-dom";
import Avatar from "../../../Avatar";

const DialogItem = props =>{
    return(
        <NavLink to={"./" + props.id} className={style.dialogItem}>
            <div>
                <Avatar/>
                {props.name}
            </div>
        </NavLink>
    )
}

export default DialogItem;