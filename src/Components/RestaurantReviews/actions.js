import {
    RESTAURANT_REVIEW_INPUT,
} from './constants'

export const setRRInput = (text) => ({
    type: RESTAURANT_REVIEW_INPUT,
    payload: text
})