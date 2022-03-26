import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import {BrowserRouter, Route,Routes} from "react-router-dom";



function App() {
    return(
        <BrowserRouter>
            <Header />
            <main className="section-main">
                <NavBar />
                <Routes>
                    <Route path='profile' element={<Profile/>}/>
                    <Route path='messages' element={<Messages/>}/>
                </Routes>
            </main>
        </BrowserRouter>

    )
}

export default App;
