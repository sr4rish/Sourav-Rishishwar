import {
    CHANGE_INPUT_FIELD,
    CHANGE_USER_DATA,
    UPDATE_ENTRIES
} from './constants'


const intialStateInput = {
    input: ''
}

export const setInput = (state = intialStateInput, action = {}) => {
    switch (action.type) {
        case CHANGE_INPUT_FIELD:
            return Object.assign({}, state, { input: action.payload });
        default:
            return state;
    }
}

const intialStateUser = {
    user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: new Date()
    }
}

export const setUser = (state = intialStateUser, action = {}) => {
    switch (action.type) {
        case CHANGE_USER_DATA:
            return Object.assign({}, state, { user: action.payload });
        case UPDATE_ENTRIES:
            return { ...state, user: { ...state.user, entries: action.payload } };
        default:
            return state;
    }
}