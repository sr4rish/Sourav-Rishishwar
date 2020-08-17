import {
    RESTAURANT_REVIEW_INPUT,
} from './constants'

const intialStateInput = {
    restaurant_review_input: ''
}

export const setRRInput = (state = intialStateInput, action = {}) => {
    //console.log(action.payload)
    switch (action.type) {
        case RESTAURANT_REVIEW_INPUT:
            return Object.assign({}, state, { restaurant_review_input: action.payload });
        default:
            return state;
    }
}