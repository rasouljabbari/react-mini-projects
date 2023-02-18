import {fetchListFailure, fetchListRequest, fetchListSuccess} from "../async/actions";
import axios from "axios";

export const fetchListThunk = (url) => {
    return function (dispatch) {
        dispatch(fetchListRequest())
        axios
            .get(url)
            .then(response => {
                // response.data is the array of users
                dispatch(fetchListSuccess(response.data))
            })
            .catch(error => {
                // error.message is the error description
                dispatch(fetchListFailure(error.message))
            })
    }
}