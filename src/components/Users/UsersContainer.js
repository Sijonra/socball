import React     from "react";
import {connect} from "react-redux";
import {
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleFollowAC,
    toggleLoadingAnimationAC
} from "../../redux/usersPageReducer";
import * as axios from "axios";
import Users from "./Users";
import {usersApi} from "../../api/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersOnPage}`, {withCredentials: true}).then(response => {
        //     this.props.setUsers(response.data.items);
        //     this.props.setTotalUsersCount(response.data.totalCount);
        // })
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
        // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.usersOnPage}`, {withCredentials: true}).then(response => {
        //     this.props.toggleLoadingAnimation();
        //     this.props.setUsers(response.data.items);
        // })
        usersApi.getUsers(this.props.currentPage, this.props.usersOnPage).then(data =>{
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

