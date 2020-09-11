import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/globalContext';

import { makeStyles, Typography } from '@material-ui/core';

import TodoCard from './todoCard';

const useStyles = makeStyles(theme => ({

    listContainer: {
        padding: theme.spacing(4),
    },

    secondaryText: {
        color: theme.palette.text.secondary
    }
}))

const TodoList = () => {

    const { todos, getTodos } = useContext(GlobalContext);

    const classes =  useStyles(); 

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <div className={classes.listContainer}>
            { todos.length ? todos.map(todo => (
                <TodoCard key={todo._id} todo={todo}/>
            )) : (
                <Typography variant="h6" className={classes.secondaryText}>
                    No tasks in sight!
                </Typography>
            )}
        </div>
    )
}

export default TodoList;