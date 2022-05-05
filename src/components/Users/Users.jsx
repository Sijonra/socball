import React from "react";
import Avatar from "../Avatar";
import style from './users.module.css'
import avatarImg from '../../assets/png-transparent-avatar-computer-icons-user-avatar-template-rectangle-logo.png'
import Loader from "../Loader";
import {NavLink} from "react-router-dom";

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
                        <button onClick={() => {
                            props.toggleFollowButton(user.id)
                        }}> {user.followed ? 'UnFollow' : 'Follow'} </button>
                    </div>
                )
            })}
        </section>
    )
}

export default Users;