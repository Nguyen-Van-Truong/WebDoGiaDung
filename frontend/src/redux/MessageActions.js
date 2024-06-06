export const ADD_MESSAGE = 'ADD_MESSAGE';
export const SET_MESSAGES = 'SET_MESSAGES';
export const  SET_STATUS ='SET_STATUS'
export const SET_GET_MESSAGES = 'SET_GET_MESSAGES';
// MessageActions.js
export const RESET_MESSAGES = 'RESET_MESSAGES';

export const resetMessages = () => ({
    type: RESET_MESSAGES
});

export const addMessage = (message) => ({
    type: ADD_MESSAGE,
    payload: message
});

export const setMessages = (messages) => ({
    type: SET_MESSAGES,
    payload: messages
});

export const check_click_app = (status) => ({
    type: 'CHECK_CLICK_APP',
    payload: status
});



export const setStatus = (currentStatus) => ({
    type: SET_STATUS,
    payload: currentStatus
});
export const setGetMessenger = (currentStatus) => ({
    type: SET_GET_MESSAGES,
    payload: currentStatus
});