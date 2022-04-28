import style from './users.module.css'
import Avatar from "../Avatar";

const Users = props =>{

    if(props.state.usersPage.users.length === 0){
        props.setUsers(
            [
                {id: 0, profileName: "Joel Embid", age: 28, isFolowed: true, avatarLink: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3059318.png&w=350&h=254', status: "я выражаю глубокое неуважаение Бену Симонсу, а если коротко Я ЕБАЛ ЕГО МАМУ В РОТ -_- ))))", profileAddress: {country: 'USA' ,city: 'Philadelhia',}},
                {id: 1, profileName: "Nikola Jokic", age: 27, isFolowed: false, avatarLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU4VYe0xLNw6SrpWMi2NsZpTO_K4uNj5gOXA&usqp=CAU', status: "Я НННИКОЛЛА ЙООКИЧ", profileAddress: {country: 'USA' ,city: 'Denver',}},
            ],
        )
    }



    let toggleFollowButton = (id) =>{
        props.handleToggleFollowButton(id);
    }

    return(
        <section>
            {props.state.usersPage.users.map(user =>{
                return(
                    <div key={user.id}>
                        <Avatar avatarLink={user.avatarLink}/>
                        <p>{user.profileName}</p>
                        <p>{user.status}</p>
                        <button onClick={()=>{toggleFollowButton(user.id)}}> {user.isFolowed ? 'UnFollow' : 'Follow'} </button>
                    </div>
                )
            })}
        </section>
    )
}

export default Users;