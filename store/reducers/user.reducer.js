import { ADD_USER, LOAD_USERS } from '../actions/user.action'
import User from '../../models/User'

const initialState ={
    users: []
}
export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_USER:
            const newUser = new User(
                action.payload.id,
                action.payload.name,
                action.payload.email,
            );
            return {
                ...state,
                users: state.users.concat(newUser),
            };
        case LOAD_USERS:
            return {
                ...state,
                users: action.users.map(item => new User(
                    item.id,
                    item.name,
                    item.email,
                ))
            }
        default:
            return state;
    }
}