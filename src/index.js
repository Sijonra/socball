import React from 'react';
import './index.css';
import {state, addPost, addNewPostText, subscribe} from './redux/state'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";



let renderEntireTree = (state, addPost, addNewPostText) =>{
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App
                    messages={state.dialogsPage.messages}
                    dialogs={state.dialogsPage.dialogs}
                    posts={state.profilePage.posts}
                    addPost={addPost}
                    newPostText={state.profilePage.newPostText}
                    addNewPostText={addNewPostText}
                />
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
subscribe(renderEntireTree);
renderEntireTree(state, addPost, addNewPostText);


