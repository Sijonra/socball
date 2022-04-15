const profileReducer = (state, action) => {

    const ADD_POST_TEXT = 'ADD-POST-TEXT'
    const ADD_POST = 'ADD-POST'

    switch (action.type) {
        case ADD_POST_TEXT:
            state.newPostText = action.text;
            break;
        case ADD_POST:
            state.posts.push({text: action.text, likesCount: action.likes},);
            break;
    }
    return state;

}

export default profileReducer;