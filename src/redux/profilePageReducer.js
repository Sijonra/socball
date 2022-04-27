let initialState = {
    posts: [
        {id: 0, text: "gamno", likesCount: 5},
        {id: 1, text: "jopa", likesCount: 3},
    ],
    newPostText: '',
}

const profileReducer = (state = initialState, action) => {

    const ADD_POST_TEXT = 'ADD-POST-TEXT'
    const ADD_POST = 'ADD-POST'
    let tmpState = {...state};
    switch (action.type) {
        case ADD_POST_TEXT: {
            tmpState.newPostText = {...state.newPostText};
            tmpState.newPostText = action.text;
            return tmpState;
        }
        case ADD_POST: {
            tmpState.posts = [...state.posts];
            let post = {
                text: state.newPostText,
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