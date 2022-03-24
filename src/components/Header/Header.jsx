import Logo from '../Logo'
import HeaderNav from "./HeaderNav";
import './Header.css'


const Header = () =>{
    return(
        <header className="section-header">
            <div className="section-inner">
                <Logo />
                <HeaderNav />
            </div>

        </header>
    )
}

export default Header;