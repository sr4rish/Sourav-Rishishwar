import {
    MOVIE_REVIEW_INPUT,
} from './constants'

const intialStateInput = {
    movie_review_input: ''
}

export const setMRInput = (state = intialStateInput, action = {}) => {
    console.log(action.payload)
    switch (action.type) {
        case MOVIE_REVIEW_INPUT:
            return Object.assign({}, state, { movie_review_input: action.payload });
        default:
            return state;
    }
}