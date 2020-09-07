import { 
    GET_TODOS, 
    ADD_TODOS, 
    TODO_ERROR 
} from './actionTypes';

export default ( state, action ) => {
    switch (action.type) {
        case GET_TODOS:
            return {
                ...state,
                loading: false,
                todos: action.data
            }

        case ADD_TODOS:
            return {
                ...state,
                todos: [...state.todos, action.newTodo]
            }

        case TODO_ERROR: 
            return {
                ...state,
                error: action.data
            }
    
        default:
            return state;
    }
}