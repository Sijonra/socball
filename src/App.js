import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Posts from "./components/Posts/Posts";



function App() {
    return(
        <section className="main-section">
            <Header />
            <main className="section-main">
                <NavBar />
                <Posts />
            </main>
        </section>

    )
}

export default App;
