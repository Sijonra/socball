import users from "../components/Users/Users";

let initialState = {
    users: [],
    usersOnPage: 5,
    totalUsersCount: 20,
    currentPage: 1,
    pageIsLoading: false,
    isButtonDisabled: false,
}

const TOGGLE_FOLLOW_BUTTON = 'TOGGLE-FOLLOW-BUTTON';
const SET_USERS = 'SET-USERS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_LOADING_ANIMATION = 'TOGGLE_LOADING_ANIMATION';
const TOGGLE_DISABLING_BUTTON = 'TOGGLE_DISABLING_BUTTON';

const usersPageReducer = (state = initialState, action) => {

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
        case SET_TOTAL_USERS_COUNT:{
            tmpState.totalUsersCount = action.count;
            return tmpState;
        }
        case SET_CURRENT_PAGE:{
            tmpState.currentPage = action.currentPage;
            return tmpState;
        }
        case TOGGLE_LOADING_ANIMATION:{
            tmpState.pageIsLoading ? tmpState.pageIsLoading = false : tmpState.pageIsLoading = true;
            return tmpState;
        }
        case TOGGLE_DISABLING_BUTTON:{
            state.isButtonDisabled ? tmpState.isButtonDisabled = false : tmpState.isButtonDisabled = true;
            return tmpState;
        }
        default:{
            return state;
        }
    }
}

export let toggleDisablingButton = () => ({type: TOGGLE_DISABLING_BUTTON,});
export let toggleFollowAC = (userId) => ({type: TOGGLE_FOLLOW_BUTTON, userId: userId});
export let setUsersAC = (users) => ({type: SET_USERS, users: users});
export let setTotalUsersCountAC = (count) => ({type: SET_TOTAL_USERS_COUNT, count: count});
export let setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage});
export let toggleLoadingAnimationAC = () => ({type: TOGGLE_LOADING_ANIMATION});

export default usersPageReducer;