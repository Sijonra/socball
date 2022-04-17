let dialogsReducer = (state, action) =>{

    const ADD_MESSAGE_TEXT = 'ADD-MESSAGE-TEXT'
    const ADD_MESSAGE = 'ADD-MESSAGE'

    if(action.type == ADD_MESSAGE_TEXT){
        state.newMessageText = action.text;
    } else if(action.type == ADD_MESSAGE){
        state.messages.push({text: action.text});
    }

    return state;

}

export default dialogsReducer;