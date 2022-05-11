import React     from "react";
import {connect} from "react-redux";
import {
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC, toggleDisablingButton,
    toggleFollowAC,
    toggleLoadingAnimationAC
} from "../../redux/usersPageReducer";
import * as axios from "axios";
import Users from "./Users";
import {usersApi} from "../../api/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        usersApi.getUsers(this.props.currentPage, this.props.usersOnPage).then(data =>{
            console.log(data);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        });
    }

    toggleFollowButton = (id) => {
        this.props.handleToggleFollowButton(id);
    }

    setCurrentPage = (currentPage) => {
        this.props.setCurrentPage(currentPage);
        this.props.toggleLoadingAnimation();
        usersApi.getUsers(currentPage, this.props.usersOnPage).then(data =>{
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
            this.props.toggleLoadingAnimation();
        });
    }

    render() {
        return (
            <Users
                // currentPage={this.props.currentPage}
                // totalUsersCount={this.props.totalUsersCount}
                // usersOnPage={this.props.usersOnPage}
                // toggleFollowButton={this.toggleFollowButton}
                // pageIsLoading={this.props.pageIsLoading}
                {...this.props}
                users={this.props.users}
                setCurrentPage={this.setCurrentPage}
            />
        )
    }
}

let mapStateToProps = (state) =>{
    return(
        {
            users: state.usersPage.users,
            totalUsersCount: state.usersPage.totalUsersCount,
            usersOnPage: state.usersPage.usersOnPage,
            currentPage: state.usersPage.currentPage,
            pageIsLoading: state.usersPage.pageIsLoading,
            isButtonDisabled: state.usersPage.isButtonDisabled,
        }
    )
}

let mapDispatchToProps = (dispatch) => {
    return{
        handleToggleFollowButton: (id) => {
            dispatch(toggleFollowAC(id));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setTotalUsersCount: (count) => {
            dispatch(setTotalUsersCountAC(count))
        },
        setCurrentPage: (currentPage) =>{
            dispatch(setCurrentPageAC(currentPage));
        },
        toggleLoadingAnimation: () =>{
            dispatch(toggleLoadingAnimationAC());
        },
        toggleDisablingButton: () =>{
            dispatch(toggleDisablingButton());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

