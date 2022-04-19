import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Messenger from "./components/Messenger/Messenger";
import {Route, Routes} from "react-router-dom";
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
                            state={props.store.getState()}
                            dispatch={props.store.dispatch.bind(props.store)}
                            store={props.store}
                        />}/>
                    <Route path='/messages/*' element={
                        <Messenger
                            state={props.store.getState()}
                            dispatch={props.store.dispatch.bind(props.store)}
                            store={props.store}
                        />
                    }/>
                    <Route path='/map' element={<Map/>}/>
                    <Route path='/friends' element={<Friends/>}/>
                </Routes>
            </main>
        </>

    )
}

export default App;
