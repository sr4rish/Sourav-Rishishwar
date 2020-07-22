import {
    CHANGE_INPUT_FIELD,
    CHANGE_USER_DATA,
    UPDATE_ENTRIES
} from './constants'

export const setInput = (text) => ({
    type: CHANGE_INPUT_FIELD,
    payload: text
})

export const setUser = (user) => ({
    type: CHANGE_USER_DATA,
    payload: user
})

export const updateEntries = (entries) => ({
    type: UPDATE_ENTRIES,
    payload: entries
})