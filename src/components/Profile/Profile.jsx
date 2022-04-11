import style from './profile.module.css'
import Posts from "./Posts/Posts";
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = props =>{
    return(
        <section className={style.profile}>
            <ProfileInfo/>
            <Posts
                posts={props.posts}
                addPost={props.addPost}
                newPostText={props.newPostText}
                addNewPostText={props.addNewPostText}
            />
        </section>
    )
}

export default Profile;