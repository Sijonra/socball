import React from "react";
import Avatar from "../Avatar";
import style from './users.module.css'
import avatarImg from '../../assets/png-transparent-avatar-computer-icons-user-avatar-template-rectangle-logo.png'
import * as axios from "axios";

class Users extends React.Component{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`).then(response=>{
            this.props.setUsers(response.data.items);
        })
    }

    toggleFollowButton = (id) =>{
        this.props.handleToggleFollowButton(id);
    }

    render() {

        let pages = [];
        for(let i = 1; i <= this.props.usersOnPage; i++){
            pages[i] = i;
        }

        return(
            <section>
                <div>
                    {pages.map(user =>{
                        return(<span key={user} className={style.activePage}>{user}</span>)
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