import {connect} from "react-redux";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) =>{
    return(
        {state: state}
    )
}

const DialogsContainer = connect(mapStateToProps)(Dialogs);

export default DialogsContainer;