import {
    CHANGE_EMAIL_SIGNIN,
    CHANGE_PASSWORD_SIGNIN
} from './constants'

export const setSignInEmail = (text) => ({
    type: CHANGE_EMAIL_SIGNIN,
    payload: text
})

export const setSignInPassword = (text) => ({
    type: CHANGE_PASSWORD_SIGNIN,
    payload: text
})