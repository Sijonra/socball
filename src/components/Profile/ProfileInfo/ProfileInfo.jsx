import Loader from "../../Loader";

const ProfileInfo = props =>{

    if(props.userProfile == null || props.userProfile == undefined){
        console.log("USERPROFILE NE NAIDEN")
        return <Loader />
    }
    else{
        return(
            <>
                <p>Имя Пользователя: {props.userProfile.fullName}</p>
                <img  src={props.userProfile.photos.large ? props.userProfile.photos.large : null} alt=""/>
                <p>Обо мне: {props.userProfile.aboutMe}</p>
                <ul>
                    Contacts:
                    <li>VK: <a href={props.userProfile.contacts.vk}>VK</a> </li>
                    <li>Facebook: <a href={props.userProfile.contacts.facebook}>FACEBOOK</a></li>
                </ul>
            </>
        )
    }


}

export default ProfileInfo;