import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import UserReducer from './reducers/user.reducer'

const RootReducer = combineReducers({
    users: UserReducer
})

export default createStore(RootReducer, applyMiddleware(thunk))