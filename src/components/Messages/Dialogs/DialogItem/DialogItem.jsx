import style from "../../messages.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = props => {

    let linkPath = './' + props.userId;

    return (
        <div className={style.dialog}>
            <NavLink className={style.dialog} to={linkPath}>{props.userName}</NavLink>
        </div>
    )
}

export default DialogItem;