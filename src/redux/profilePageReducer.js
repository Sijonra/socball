let initialState = {
    posts: [
        {id: 0, text: "gamno", likesCount: 5},
        {id: 1, text: "jopa", likesCount: 3},
    ],
    newPostText: '',
    userProfile:null,
}

const ADD_POST = 'ADD-POST'
const ADD_POST_TEXT = 'ADD-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

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
        case SET_USER_PROFILE: {
            tmpState.userProfile = action.user;
            return  tmpState;
        }
        default:
            return state;
    }

}

export let addPostActionCreator = (likes) => ({type: ADD_POST, likes: likes,})
export let addNewPostTextActionCreator = (text) => ({type: ADD_POST_TEXT , text: text})
export let setUserProfileAC = (user) => ({type: SET_USER_PROFILE, user: user})


export default profileReducer;