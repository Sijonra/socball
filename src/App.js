import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/ProfileInfo/Profile";
import Messages from "./components/Messages/Messages";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Map from "./components/Map/Map";
import Friends from "./components/Friends/Friends";



function App() {
    return(
        <BrowserRouter>
            <Header />
            <main className="section-main">
                <NavBar />
                <Routes>
                    <Route path='/profile' element={<Profile userName="zadnica"/>}/>
                    <Route path='/messages/*' element={<Messages/>}/>
                    <Route path='/map' element={<Map/>}/>
                    <Route path='/friends' element={<Friends/>}/>
                </Routes>
            </main>
        </BrowserRouter>

    )
}

export default App;
