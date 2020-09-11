import React, { useState, useEffect, useContext } from 'react';
import { useLocalState } from '../helpers/useLocalState';

import { 
  ThemeProvider, 
  Paper, 
  Container, 
  Switch, 
  FormControlLabel, 
  makeStyles 
} from '@material-ui/core';
import { defaultTheme } from './themes';

import AppHeader from '../components/appHeader';
import AddTodoForm from '../components/addTodoForm';
import TodoList from '../components/todoList';

const useStyles = makeStyles(theme => ({
  appMain: {
    backgroundColor: theme.palette.text.primary,
    minHeight: '100vh'
  },

  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  }
}))

const ThemeContainer = () => {

  const [darkTheme, setDarkTheme] = useLocalState('theme', false);
  const classes = useStyles();

  const switchTheme = () => {
    setDarkTheme(!darkTheme);
  }

  return (
    <ThemeProvider theme={defaultTheme(darkTheme)}>
      <div className={classes.appMain}>
        <Container maxWidth="sm" className={classes.container}>
          <Paper>
            <Container maxWidth="xm">
              <AppHeader />
              <FormControlLabel
                control={
                  <Switch 
                    color="primary"
                    checked={darkTheme}
                    onChange={switchTheme}
                  />
                }
                label="Dark"
              />

              <AddTodoForm />
              <TodoList />
            </Container>
          </Paper>
        </Container>
      </div>
    </ThemeProvider>
  )
}

export default ThemeContainer;