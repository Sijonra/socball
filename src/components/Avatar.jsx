import style from './avatar.module.css';

const Avatar = (props) =>{
    return(
        <div className={style.avatarWrapper}>
            {/*<img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg" alt=""/>*/}
            <img className={style.avatar} src={props.avatarLink} alt=""/>
        </div>
    )
}
export default Avatar;
