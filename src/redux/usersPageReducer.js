let initialState = {
    users: [
        {profileId: 0, profileName: "Joel Embid", profileIsFolowed: true, profileStatus: "BEN SIMONS SUCKS"},
        {profileId: 0, profileName: "Nikola Jokich", profileIsFolowed: true, profileStatus: "BEN SIMONS SUCKS"},
    ],
}

const usersPageReducer = (state = initialState, action) => {

    const FOLLOW_USER = 'FOLLOW-USER'
    const UNFOLLOW_USER = 'UNFOLLOW-USER'

    let tmpState = {...state}
    tmpState.users = [...state.users]

    switch (action.type){
        case FOLLOW_USER:{
            return tmpState;
        }
        case UNFOLLOW_USER:{
            return tmpState;
        }
        default:{
            return tmpState;
        }
    }

}

export default usersPageReducer;