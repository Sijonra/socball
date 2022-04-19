import React from 'react';
import './index.css';
import {store} from './redux/redux-store'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

let renderEntireTree = () =>{
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App store={store}/>
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
store.subscribe(renderEntireTree);
renderEntireTree();


