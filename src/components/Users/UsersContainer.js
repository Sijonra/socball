import {connect} from "react-redux";
import Users from "./Users";
import {setUsersAC, toggleFollowAC} from "../../redux/usersPageReducer";

let mapStateToProps = (state) =>{
    return(
        {
            users: state.usersPage.users,
            totalUsersCount: state.usersPage.totalUsersCount,
            usersOnPage: state.usersPage.usersOnPage,
        }
    )
}

let mapDispatchToProps = (dispatch) =>{
    return{
        handleToggleFollowButton: (id) =>{
            dispatch(toggleFollowAC('TOGGLE-FOLLOW-BUTTON', id));
        },
        setUsers: (users) =>{
            dispatch(setUsersAC('SET-USERS', users))
        }
    }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;