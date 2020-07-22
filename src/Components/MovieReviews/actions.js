import {
    MOVIE_REVIEW_INPUT,
} from './constants'

export const setMRInput = (text) => ({
    type: MOVIE_REVIEW_INPUT,
    payload: text
})