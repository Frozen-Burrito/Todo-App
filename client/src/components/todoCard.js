import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/globalContext';

import { Card, CardContent, Typography, CardHeader, IconButton, CardActions, Checkbox, makeStyles } from '@material-ui/core';
import { Close } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({

  cardHeader: {
    paddingBottom: theme.spacing(1)
  },

  cardContent: {
    paddingTop: '0',
    paddingBottom: '0',
  },

  cardSpacing: {
    marginBottom: theme.spacing(4)
  }
}))

const TodoCard = ({ todo }) => {

  const classes = useStyles();

  const [ check, setCheck ] = useState(todo.complete);
  const { updateTodo, deleteTodo } = useContext(GlobalContext);

  const description = 'Curabitur id volutpat risus. Morbi non orci ornare, porttitor nunc non, vehicula enim.';

  const checkTask = () => {
    setCheck(!check);
    todo.complete = !check;
    updateTodo(todo, check);
  } 

  const deleteTask = () => {
    deleteTodo(todo._id);
  }

  return (
    <Card className={classes.cardSpacing} onClick={checkTask}>
      <CardHeader
        className={classes.cardHeader}
        action={
          <IconButton aria-label='Delete' onClick={deleteTask}>
            <Close/>
          </IconButton>
        }
        title={<Typography variant="h5" component="h2">{todo.text}</Typography>}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>

      <CardActions>
          <Checkbox
            checked={check}
            onChange={checkTask}
            color="primary"
          />
        </CardActions>
    </Card>
  )
}

export default TodoCard;