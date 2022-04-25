// import profileReducer from "./profilePageReducer";
// import dialogsPageReducer from "./dialogsPageReducer";
//
// let store = {
//     _state: {
//         dialogsPage: {
//             dialogs: [
//                 {name: "Toha", id: 0},
//                 {name: "Nekit", id: 1},
//             ],
//             messages: [
//                 {text: "Привет, друг"},
//             ],
//             newMessageText: '',
//         },
//         profilePage: {
//             posts: [
//                 {text: "gamno", likesCount: 5},
//                 {text: "jopa", likesCount: 3},
//             ],
//             newPostText: '',
//         },
//     },
//
//     subscribe(observer) {this._renderEntireTree = observer;},
//
//     _renderEntireTree() {},
//
//     addNewDialogMessage(text) {
//         this._state.dialogsPage.messages.push({text: text});
//         this._renderEntireTree();
//     },
//
//     addNewMessageText(text) {
//         this._state.dialogsPage.newMessageText = text;
//         this._renderEntireTree();
//     },
//
//     addNewPostText (text){
//         this._state.profilePage.newPostText = text;
//         this._renderEntireTree();
//     },
//     addPost (text, likes){
//         this._state.profilePage.posts.push({text: text, likesCount: likes},);
//         this._renderEntireTree();
//     },
//
//     getState() {return this._state},
//
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);
//         this._renderEntireTree();
//     },
//
// }
//
// export let addPostActionCreator = (type, text, likes) => ({type: type, text: text, likes: likes,})
// export let addNewPostTextActionCreator = (type, text) => ({type: type, text: text})
//
// export let addNewMessageTextActionCreator = (type, text) => ({type: type, text: text,});
// export let addNewMessageActionCreator = (type, text) => ({type: type, text: text,});
//
// export {store};