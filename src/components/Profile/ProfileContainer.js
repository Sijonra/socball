import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import axios from "axios";
import {setUserProfileAC} from "../../redux/profilePageReducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";

class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.router.params.userId;
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId).then(response =>{
            this.props.setUserProfile(response.data);
        })
    }

    render() {
        return(
            <Profile userProfile={this.props.userProfile}/>
        )
    }
}

let mapStateToProps = state =>{
    return{
        userProfile: state.profilePage.userProfile,
    }
}

let mapDispatchToProps = dispatch =>{
    return{
        setUserProfile: (user)=>{
            dispatch(setUserProfileAC(user))
        }
    }
}

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

let withUrlProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps)(withUrlProfileContainer);