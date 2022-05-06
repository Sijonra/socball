let initialState = {
    id: null,
    email: null,
    login: null,
    isLoggedIn: false,
}

const SET_AUTH_USER = 'SET_AUTH_USER';

let authReducer = (state = initialState, action) => {
    let tmpState = {...state};
    switch (action.type){
        case (SET_AUTH_USER):{
            tmpState.id = action.id
            tmpState.email = action.email
            tmpState.login = action.login
            tmpState.login ? tmpState.isLoggedIn = true : tmpState.isLoggedIn = false
            return tmpState;
        }
    }
    return state;
}

export let setAuthUserAC = (id, email, login) =>{ return{type: SET_AUTH_USER, id: id, email: email, login: login}}
export default authReducer;