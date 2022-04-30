import users from "../components/Users/Users";

let initialState = {
    users: [],
    usersOnPage: 5,
    totalUsersCount: 20,
    currentUser: 1,
}

const usersPageReducer = (state = initialState, action) => {

    // const FOLLOW_USER = 'FOLLOW-USER'
    // const UNFOLLOW_USER = 'UNFOLLOW-USER'
    const TOGGLE_FOLLOW_BUTTON = 'TOGGLE-FOLLOW-BUTTON';
    const SET_USERS = 'SET-USERS';

    let tmpState = {...state}
    tmpState.users = [...state.users]

    switch (action.type){
        case TOGGLE_FOLLOW_BUTTON:{
            tmpState.users.map( user =>{
                if(user.id === action.userId){
                    user.followed ? user.followed = false : user.followed = true;
                }
            })
            return tmpState;
        }
        case SET_USERS:{
            tmpState.users = action.users;
            return tmpState
        }
        default:{
            return state;
        }
    }


}

export let toggleFollowAC = (type, userId) => ({type: type, userId: userId});
export let setUsersAC = (type, users) => ({type: type, users: users})

export default usersPageReducer;