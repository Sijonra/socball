let initialState = {
    dialogs: [
        {name: "Toha", id: 0},
        {name: "Nekit", id: 1},
    ],
    messages: [
        {text: "Привет, друг"},
    ],
    newMessageText: '',
}

let dialogsReducer = (state = initialState, action) =>{

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