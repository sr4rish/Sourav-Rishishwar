import {
    CHANGE_EMAIL_SIGNIN,
    CHANGE_PASSWORD_SIGNIN
} from './constants'

const intialStateEmail = {
    signInEmail: ''
}

export const setSignInEmail = (state=intialStateEmail, action={}) =>{
    switch(action.type){
        case CHANGE_EMAIL_SIGNIN:
            return Object.assign({}, state, {signInEmail:action.payload});
        default:
            return state;
    }
}


const intialStatePassword = {
    signInPassword: ''
}

export const setSignInPassword = (state=intialStatePassword, action={}) =>{
    switch(action.type){
        case CHANGE_PASSWORD_SIGNIN:
            return Object.assign({}, state, {signInPassword:action.payload});
        default:
            return state;
    }
}