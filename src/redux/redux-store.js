import {combineReducers, createStore} from "redux";
import profileReducer from "./profilePageReducer";
import dialogsReducer from "./dialogsPageReducer";
import usersPageReducer from "./usersPageReducer";

export let addPostActionCreator = (likes) => ({type: 'ADD-POST', likes: likes,})
export let addNewPostTextActionCreator = (text) => ({type: 'ADD-POST-TEXT', text: text})

export let addNewMessageTextActionCreator = (text) => ({type: 'ADD-MESSAGE-TEXT', text: text});
export let addNewMessageActionCreator = () => ({type: 'ADD-MESSAGE',});

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersPageReducer,
});

let store = createStore(reducers);

window.store = store;

export {store};