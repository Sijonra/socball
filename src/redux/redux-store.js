import {combineReducers, createStore} from "redux";
import profileReducer from "./profilePageReducer";
import dialogsReducer from "./dialogsPageReducer";
import usersPageReducer from "./usersPageReducer";
import authReducer from "./authReducer";

export let addNewMessageTextActionCreator = (text) => ({type: 'ADD-MESSAGE-TEXT', text: text});
export let addNewMessageActionCreator = () => ({type: 'ADD-MESSAGE',});

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersPageReducer,
    auth: authReducer,
});

let store = createStore(reducers);

window.store = store;

export {store};