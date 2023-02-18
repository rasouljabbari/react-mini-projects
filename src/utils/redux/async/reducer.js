import {FETCH_DATA_PENDING, FETCH_DATA_FULFILLED, FETCH_DATA_REJECTED} from "./types";

const initialState = {
    loading: false,
    list: [],
    error: ''
}

export const asyncReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_PENDING :
            return {
                ...state,
                loading: true
            }

        case FETCH_DATA_FULFILLED :
            return {
                ...state,
                loading: false,
                list: action.payload,
            }

        case FETCH_DATA_REJECTED :
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}