import {
    REGISTER_EMAIL,
    REGISTER_PASSWORD,
    REGISTER_NAME
} from './constants'

export const registerEmail = (text) => ({
    type: REGISTER_EMAIL,
    payload: text
})

export const registerPassword = (text) => ({
    type: REGISTER_PASSWORD,
    payload: text
})

export const registerName = (text) => ({
    type: REGISTER_NAME,
    payload: text
})