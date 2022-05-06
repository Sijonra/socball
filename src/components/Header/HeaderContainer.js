import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserAC} from "../../redux/authReducer";
import axios from "axios";

class HeaderContainer extends React.Component{

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true}).then(response=>{
            console.log(response.data.data);
            this.props.setAuthUser(response.data.data.id, response.data.data.email, response.data.data.login);
        })
    }

    render() {
        return(
            <Header {...this.props} isLoggedIn={this.props.isLoggedIn} userLogin={this.props.userLogin} />
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        isLoggedIn: state.auth.isLoggedIn,
        userLogin: state.auth.login,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        setAuthUser: (id, email, login) =>{
            dispatch(setAuthUserAC(id, email, login));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
