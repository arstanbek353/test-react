import { GET_MENU } from "../actionCreator/types"
const initialState = {
    menu: [
        { name: 'Главная', path: '/', icon: 'images/home.svg' },
        { name: 'Клиенты', path: '/customers', icon: 'images/people.svg' },
        { name: 'Сотрудники', path: '/employees', icon: 'images/people-fill.svg' },
        { name: 'Аналитика', path: '/analytics', icon: 'images/chart.svg' }
    ]
}

export const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MENU:
            return { ...state, menu: action.payload }
        default:
            return state;
    }
}