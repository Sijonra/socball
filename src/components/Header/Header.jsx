import Logo from '../Logo'
import HeaderNav from "./HeaderNav";
import './header.css'


const Header = (props) =>{
    return(
        <header className="section-header">
            <div className="section-inner">
                <Logo />
                <HeaderNav isLoggedIn={props.isLoggedIn} userLogin={props.userLogin}  />
            </div>

        </header>
    )
}

export default Header;