import { GET_COMMENTS, LOADING } from "../actionCreator/types"
const initialState = {
    loading: false,
    comments: [],
}

export const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return { ...state, loading: action.payload }
        case GET_COMMENTS:
            return { ...state, loading: false, comments: action.payload }
        default:
            return state;
    }
}