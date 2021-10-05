import { insertUser,fetchUsers } from '../../db';

export const ADD_USER = 'ADD_USER';
export const LOAD_USERS = 'LOAD_USERS';

export const addPlace = (name, email) => {
    return async dispatch => {
            const result = await insertUser(
                name,
                email
            );
                    
            dispatch({
                type: ADD_USER,
                payload: {
                    id: result.insertId,
                    name,
                    email,
                }
            });   
    }
}

export const loadUsers = () => {
    return async dispatch => {
        try {
            const result = await fetchUsers();
            dispatch({ type: LOAD_USERS, users: result.rows._array })
        } catch (error) {
            throw error;
        }
    }
}
