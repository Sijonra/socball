import {combineReducers, createStore} from "redux";
import profileReducer from "./profilePageReducer";
import dialogsReducer from "./dialogsPageReducer";

export let addPostActionCreator = (text, likes) => ({type: 'ADD-POST', text: text, likes: likes,})
export let addNewPostTextActionCreator = (text) => ({type: 'ADD-POST-TEXT', text: text})

export let addNewMessageTextActionCreator = (type, text) => ({type: type, text: text,});
export let addNewMessageActionCreator = (type, text) => ({type: type, text: text,});

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
});

let store = createStore(reducers);

window.store = store;

export {store};