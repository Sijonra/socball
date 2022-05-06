import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Messenger from "./components/Messenger/Messenger";
import {Route, Routes} from "react-router-dom";
import Map from "./components/Map/Map";
import Friends from "./components/Friends/Friends";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App(props) {
    return(
        <>
            <HeaderContainer />
            <main className="section-main">
                <NavBar />
                <Routes>
                    <Route path='/profile/:userId' element={
                        <ProfileContainer />
                    }/>
                    <Route path='/messages/*' element={
                        <Messenger/>
                    }/>
                    <Route path='/users' element={
                        <UsersContainer/>
                    }/>
                    <Route path='/map' element={<Map/>}/>
                    <Route path='/friends' element={<Friends/>}/>
                </Routes>
            </main>
        </>

    )
}

export default App;
