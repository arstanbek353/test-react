import { GET_ACCOUNT } from "../actionCreator/types"
const initialState = {
    name: 'Владимир',
    surname: 'Петров',
    patronymic: 'Александрович',
    avatar: 'images/person.svg'
}

export const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ACCOUNT:
            return state;
        default:
            return state;
    }
}