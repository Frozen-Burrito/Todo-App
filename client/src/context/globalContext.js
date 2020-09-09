import React, { createContext, useReducer } from 'react';
import axios from 'axios';

import rootReducer from './rootReducer';
import { 
    GET_TODOS, 
    ADD_TODOS, 
    UPDATE_TODO, 
    DELETE_TODO,
    TODO_ERROR,  
} from './actionTypes';

const initState = {
    todos: [],
    error: null,
    loading: true,
}

export const GlobalContext = createContext(initState);

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(rootReducer, initState);

    const getTodos = async () => {

        try {
            const response = await axios.get('/api/v1/todos');

            dispatch({
                type: GET_TODOS,
                data: response.data.todos
            });

        } catch (error) {
            dispatch({
                type: TODO_ERROR,
                data: error,
            });
        }
    }

    const addTodo = async (todo) => {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const response = await axios.post('/api/v1/todos/new', todo, config);

            dispatch({
                type: ADD_TODOS,
                newTodo: response.data.savedTodo
            });

        } catch (error) {
            dispatch({
                type: TODO_ERROR,
                data: error,
            });
        }
    }

    const updateTodo = async (todo, check) => {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const response = await axios.put(`/api/v1/todos/${todo._id}`, todo, config);
            console.log(todo, todo._id);

            dispatch({
                type: UPDATE_TODO,
                updatedTodo: response.data.updatedTodo
            });

        } catch (error) {
            dispatch({
                type: TODO_ERROR,
                data: error,
            });
        }
    }

    const deleteTodo = async (id) => {
        try {
            await axios.delete(`/api/v1/todos/${id}`);

            dispatch({
                type: DELETE_TODO,
                id
            });

        } catch (error) {
            dispatch({
                type: TODO_ERROR,
                data: error,
            });
        }
    }

    return (
        <GlobalContext.Provider value={{
            todos: state.todos,
            error: state.error,
            loading: state.loading,

            getTodos,
            addTodo,
            updateTodo,
            deleteTodo,
        }}>
            { children }
        </GlobalContext.Provider>
    )
}