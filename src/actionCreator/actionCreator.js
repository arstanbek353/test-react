import {
    GET_CUSTOMERS,
    GET_POSTS,
    GET_COMMENTS,
    GET_MENU,
    GET_ACCOUNT,
    LOADING
} from "./types"

export const getCustomersAction = (payload) => ({ type: GET_CUSTOMERS, payload })
export const getPostsAction = (payload) => ({ type: GET_POSTS, payload })
export const getCommentsAction = (payload) => ({ type: GET_COMMENTS, payload })
export const getMenuAction = (payload) => ({ type: GET_MENU, payload })
export const getAccountAction = () => ({ type: GET_ACCOUNT })
export const loading = (payload) => ({ type: LOADING, payload })