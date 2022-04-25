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

    // if(action.type == ADD_MESSAGE_TEXT){
    //     let tmpState = {...state}
    //     tmpState.newMessageText = {...state.newMessageText}
    //     tmpState.newMessageText = action.text;
    // } else if(action.type == ADD_MESSAGE){
    //     state.messages.push({text: action.text});
    // }

    switch(action.type){
        case ADD_MESSAGE_TEXT: {
            let tmpState = {...state}
            tmpState.newMessageText = {...state.newMessageText}
            tmpState.newMessageText = action.text
            return tmpState
        }
        case ADD_MESSAGE: {
            let tmpState = {...state}
            tmpState.messages = [...state.messages]
            let message = {
                text: action.text,
            }
            tmpState.messages.push(message)
            return tmpState
        }
        default: return state
    }

}

export default dialogsReducer;