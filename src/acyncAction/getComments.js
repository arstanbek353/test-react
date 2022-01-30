import { getCommentsAction, loading } from "../actionCreator/actionCreator"

export const fetchComments = () => {
    return function (dispatch) {
        dispatch(loading(true))
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => dispatch(getCommentsAction(json)))
    }
}