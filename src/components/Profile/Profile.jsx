import style from './profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import PostsContainer from './Posts/PostsContainer'

const Profile = props =>{
    return(
        <section className={style.profile}>
            <ProfileInfo userProfile={props.userProfile}/>
            <PostsContainer />
        </section>
    )
}

export default Profile;