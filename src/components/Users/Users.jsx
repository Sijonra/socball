import React from "react";
import Avatar from "../Avatar";
import style from './users.module.css'
import avatarImg from '../../assets/png-transparent-avatar-computer-icons-user-avatar-template-rectangle-logo.png'
import * as axios from "axios";

class Users extends React.Component{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersOnPage}`).then(response=>{
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }

    toggleFollowButton = (id) =>{
        this.props.handleToggleFollowButton(id);
    }

    setCurrentPage = (currentPage) =>{
        console.log('page changed')
        this.props.setCurrentPage(currentPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.usersOnPage}`).then(response=>{
            this.props.setUsers(response.data.items);
        })
    }

    render() {

        let pages = [];
        for(let i = 1; i <= Math.ceil(this.props.totalUsersCount / this.props.usersOnPage); i++){
            pages[i] = i;
        }

        return(
            <section>
                <div className={style.pagination}>
                    {pages.map(page =>{
                        if(pages.length > 10){
                           if(page == this.props.currentPage || page == this.props.currentPage -3 || page == this.props.currentPage -2 || page == this.props.currentPage -1|| page == this.props.currentPage || page == this.props.currentPage + 1 || page == this.props.currentPage + 2 || page == this.props.currentPage + 3 || page == this.props.currentPage +4){
                               return(
                                   <span
                                       onClick={ (e) => this.setCurrentPage(page) } key={page} className={ (this.props.currentPage == page) ? style.activePage : style.activePage1}>{page}
                                   </span>
                               )
                           }
                        }
                    })}
                </div>
                {this.props.users.map(user =>{
                    return(
                        <div key={user.id}>
                            <Avatar avatarLink={ user.photos.small ? user.photos.small : avatarImg} />
                            <p>{user.name + " #" + user.id}</p>
                            <p>{user.status}</p>
                            <button onClick={()=>{this.toggleFollowButton(user.id)}}> {user.followed ? 'UnFollow' : 'Follow'} </button>
                        </div>
                    )
                })}
            </section>
        )
    }

}

export default Users;