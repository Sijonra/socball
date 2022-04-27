let initialState = {
    dialogs: [
        {name: "Toha", id: 0,},
        {name: "Nekit", id: 1,},
    ],
    messages: [
        {id: 0, text: "Привет, друг"},
    ],
    newMessageText: '',
}

let dialogsReducer = (state = initialState, action) =>{

    const ADD_MESSAGE_TEXT = 'ADD-MESSAGE-TEXT'
    const ADD_MESSAGE = 'ADD-MESSAGE'
    let tmpState = {...state}

    switch(action.type){
        case ADD_MESSAGE_TEXT: {
            tmpState.newMessageText = {...state.newMessageText}
            tmpState.newMessageText = action.text
            return tmpState
        }
        case ADD_MESSAGE: {
            tmpState.messages = [...state.messages]
            let message = {
                text: state.newMessageText,
            }
            tmpState.messages.push(message)
            tmpState.newMessageText = ''
            return tmpState
        }
        default: return state
    }

}

export default dialogsReducer;