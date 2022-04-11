let state = {
    dialogsPage: {
        dialogs: [
            {name: "Toha", id: 0},
            {name: "Nekit", id: 1},
        ],
        messages: [
            {message: "privet"},
            {message: "zdarova"},
        ]
    },
    profilePage: {
        posts: [
            {text: "gamno", likesCount: 5},
            {text: "jopa", likesCount: 3},
        ],
        newPostText: '',
    }
}

let store = {

}

let renderEntireTree = () =>{

}

let addNewPostText = (text) =>{
    state.profilePage.newPostText = text;
    renderEntireTree(state, addPost, addNewPostText);
}

let addPost = (text, likes) =>{
    state.profilePage.posts.push({text: text, likesCount: likes},);
    renderEntireTree(state, addPost, addNewPostText);
}

let subscribe = (callback) =>{
    renderEntireTree = callback;
}

export {addPost, addNewPostText, state, subscribe};