import {FETCH_DATA_PENDING, FETCH_DATA_FULFILLED, FETCH_DATA_REJECTED} from "./types";

export const fetchListRequest = () => {
    return {
        type: FETCH_DATA_PENDING
    }
}

export const fetchListSuccess = (list) => {
    return {
        type: FETCH_DATA_FULFILLED,
        payload: list
    }
}

export const fetchListFailure = (error) => {
    return {
        type: FETCH_DATA_REJECTED,
        payload: error
    }
}