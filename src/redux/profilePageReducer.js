let initialState = {
    posts: [
        {text: "gamno", likesCount: 5},
        {text: "jopa", likesCount: 3},
    ],
    newPostText: '',
}

const profileReducer = (state = initialState, action) => {

    const ADD_POST_TEXT = 'ADD-POST-TEXT'
    const ADD_POST = 'ADD-POST'

    switch (action.type) {
        case ADD_POST_TEXT: {
            let tmpState = {...state};
            tmpState.newPostText = {...state.newPostText};
            tmpState.newPostText = action.text;
            return tmpState;
        }
        case ADD_POST: {
            let tmpState = {...state};
            tmpState.posts = [...state.posts];
            let post = {
                text: action.text,
                likesCount: action.likes,
            }
            tmpState.posts.push(post);
            tmpState.newPostText = '';
            return tmpState;
        }
        default:
            return state;
    }

}

export default profileReducer;