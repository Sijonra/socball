import React from "react";
import Avatar from "../Avatar";
import style from './users.module.css'
import avatarImg from '../../assets/png-transparent-avatar-computer-icons-user-avatar-template-rectangle-logo.png'
import Loader from "../Loader";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersApi} from "../../api/api";

let Users = props =>{
    let pages = [];
    for (let i = 1; i <= Math.ceil(props.totalUsersCount / props.usersOnPage); i++) {
        pages[i] = i;
    }
    return(
        <section>
            {props.pageIsLoading ? <Loader/> : null}
            <div className={style.pagination}>
                {pages.map(page => {
                    return (
                        <span
                            onClick={() => props.setCurrentPage(page)} key={page}
                            className={(props.currentPage == page) ? style.activePage : style.activePage1}>{page}
                        </span>
                    )
                })}
            </div>
            {props.users.map(user => {
                return (
                    <div key={user.id}>
                        <NavLink to={'/profile/' + user.id}>
                            <Avatar avatarLink={user.photos.small ? user.photos.small : avatarImg}/>
                        </NavLink>
                        <p>{user.name + " #" + user.id}</p>
                        <p>{user.status}</p>
                        {user.followed ?
                            <button onClick={()=>{
                                // axios.delete('https://social-network.samuraijs.com/api/1.0/follow/' + user.id, {withCredentials: true, headers:{"API-KEY": "7a72805e-3ef8-4b01-8441-810a01e74cd2"}}).then(response =>{
                                //     console.log(response.data);
                                //     props.handleToggleFollowButton(user.id);
                                // })
                                usersApi.unfollowUser(user.id, props.handleToggleFollowButton);
                            }}>unfollow</button>
                            :
                            <button onClick={()=>{
                                // axios.post('https://social-network.samuraijs.com/api/1.0/follow/' + user.id, {}, {withCredentials: true, headers:{"API-KEY": "7a72805e-3ef8-4b01-8441-810a01e74cd2"}}).then(response =>{
                                //     console.log(response.data);
                                //     props.handleToggleFollowButton(user.id);
                                // })
                                usersApi.followUser(user.id, props.handleToggleFollowButton);
                            }}>follow</button>}
                    </div>
                )
            })}
        </section>
    )
}

export default Users;