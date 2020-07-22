import {
    REGISTER_EMAIL,
    REGISTER_PASSWORD,
    REGISTER_NAME
} from './constants'

const intialStateEmail ={
    email: '',
}

export const registerEmail = (state=intialStateEmail, action={}) =>{
    switch(action.type){
        case REGISTER_EMAIL:
            return Object.assign({}, state, {input:action.payload});
        default:
            return state;
    }
}


const intialStatePassword ={
    password: '',

}

export const registerPassword = (state=intialStatePassword, action={}) =>{
    switch(action.type){
        case REGISTER_PASSWORD:
            return Object.assign({}, state, {input:action.payload});
        default:
            return state;
    }
}


const intialStateName ={
    name: ''
}

export const registerName = (state=intialStateName, action={}) =>{
    switch(action.type){
        case REGISTER_NAME:
            return Object.assign({}, state, {input:action.payload});
        default:
            return state;
    }
}