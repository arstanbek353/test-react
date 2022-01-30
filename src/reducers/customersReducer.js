import { GET_CUSTOMERS, LOADING } from "../actionCreator/types"
const initialState = {
    loading: false,
    customers: [],
}

export const customersReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return { ...state, loading: action.payload }
        case GET_CUSTOMERS:
            return { ...state, loading: false, customers: action.payload }
        default:
            return state;
    }
}