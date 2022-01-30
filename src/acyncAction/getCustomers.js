import { getCustomersAction, loading } from "../actionCreator/actionCreator"

export const fetchCustomers = () => {
    return function (dispatch) {
        dispatch(loading(true))
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch(getCustomersAction(json)))
    }
}