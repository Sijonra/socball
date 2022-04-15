import style from './profile.module.css'
import Posts from "./Posts/Posts";
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = props =>{
    return(
        <section className={style.profile}>
            <ProfileInfo/>
            <Posts
                state={props.state}
                dispatch={props.dispatch}
            />
        </section>
    )
}

export default Profile;