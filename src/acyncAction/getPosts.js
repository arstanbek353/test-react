import { getPostsAction, loading } from "../actionCreator/actionCreator"

export const fetchPosts = () => {
    return function (dispatch) {
        dispatch(loading(true))
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => dispatch(getPostsAction(json)))
    }
}