export const ADD_MESSAGE = 'ADD_MESSAGE';
export const SET_MESSAGES = 'SET_MESSAGES';
export const  SET_STATUS ='SET_STATUS'


export const addMessage = (message) => ({
    type: ADD_MESSAGE,
    payload: message
});

export const setMessages = (messages) => ({
    type: SET_MESSAGES,
    payload: messages
});



export const setStatus = (currentStatus) => ({
    type: SET_STATUS,
    payload: currentStatus
});
