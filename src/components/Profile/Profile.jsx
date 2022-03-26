import style from './profile.module.css'
import Posts from "./Posts/Posts";

const Profile = props =>{
    return(
        <section className={style.profile}>
            Profile name {props.userName}
            <form>
                <input type="text" placeholder="Type your text"/>
                <input type="submit" value="Submit"/>
            </form>

            <Posts />
        </section>
    )
}

export default Profile;