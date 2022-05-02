import React     from "react";
import {connect} from "react-redux";
import {
    setCurrentPageAC, setPageToLoadAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleFollowAC
} from "../../redux/usersPageReducer";
import * as axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersOnPage}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }

    toggleFollowButton = (id) => {
        this.props.handleToggleFollowButton(id);
    }

    setCurrentPage = (currentPage) => {
        this.props.setCurrentPage(currentPage);
        this.props.setPageToLoad();
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.usersOnPage}`).then(response => {
            this.props.setPageToLoad();
            this.props.setUsers(response.data.items);
        })
    }

    render() {

        return (
            <Users
                currentPage={this.props.currentPage}
                totalUsersCount={this.props.totalUsersCount}
                usersOnPage={this.props.usersOnPage}
                users={this.props.users}
                setCurrentPage={this.setCurrentPage}
                toggleFollowButton={this.toggleFollowButton}
                setPageToLoad={this.props.setPageToLoad}
                pageIsLoading={this.props.pageIsLoading}
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
        setPageToLoad: () =>{
            dispatch(setPageToLoadAC());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

