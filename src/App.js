import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Map from "./components/Map/Map";
import Friends from "./components/Friends/Friends";

function App(props) {
    return(
        <>
            <Header />
            <main className="section-main">
                <NavBar />
                <Routes>
                    <Route path='/profile/*' element={
                        <Profile
                            posts={props.posts}
                            addPost={props.addPost}
                            newPostText={props.newPostText}
                            addNewPostText={props.addNewPostText}
                        />}
                    />
                    <Route path='/messages/*' element={
                        <Messages
                            messages={props.messages}
                            dialogs={props.dialogs}
                        />}
                    />
                    <Route path='/map' element={<Map/>}/>
                    <Route path='/friends' element={<Friends/>}/>
                </Routes>
            </main>
        </>

    )
}

export default App;
