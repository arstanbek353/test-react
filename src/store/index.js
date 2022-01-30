import { createStore, combineReducers, applyMiddleware } from 'redux'
import { customersReducer } from '../reducers/customersReducer'
import { postsReducer } from '../reducers/postsReducer'
import { commentsReducer } from '../reducers/commentsReducer'
import { sidebarReducer } from '../reducers/sidebarReducer'
import { accountReducer } from '../reducers/accountReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    customers: customersReducer,
    posts: postsReducer,
    comments: commentsReducer,
    sidebar: sidebarReducer,
    account: accountReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))