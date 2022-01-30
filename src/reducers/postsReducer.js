import { GET_POSTS, LOADING } from "../actionCreator/types"
const initialState = {
    loading: false,
    posts: [],
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return { ...state, loading: action.payload }
        case GET_POSTS:
            return { ...state, loading: false, posts: action.payload }
        default:
            return state;
    }
}