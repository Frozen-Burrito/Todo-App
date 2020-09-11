import { 
    GET_TODOS, 
    ADD_TODOS, 
    UPDATE_TODO,
    DELETE_TODO,
    GET_CONFIG,
    UPDATE_CONFIG,
    TODO_ERROR, 
    CONFIG_ERROR
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
                todos: [action.newTodo, ...state.todos]
            }

        case UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, i) => {
                    if (action.updatedTodo._id === todo._id) {
                        return {
                            ...todo,
                            complete: action.updatedTodo.complete
                        }
                    }

                    return todo;
                })
            }

        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo._id !== action.id)
            }

        case GET_CONFIG: 
            return {
                ...state,
                config: action.config
            }

        case UPDATE_CONFIG:
            return {
                ...state,
                config: action.updatedConfig
            }

        case TODO_ERROR: 
            return {
                ...state,
                error: action.data
            }

        case CONFIG_ERROR: 
            return {
                ...state,
                error: action.data
            }
    
        default:
            return state;
    }
}