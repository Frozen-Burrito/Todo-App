import { createMuiTheme } from '@material-ui/core';

export const defaultTheme = (darkEnabled) => createMuiTheme({
    palette: {
        type: darkEnabled ? 'dark' : 'light',
        
        primary: {
            main: '#2196F3',
            light: '#448AFF',
            dark: '#1976D2'
        },

        secondary: {
            main: '#536DFE',
        },

        background: {
            default: '#000'
        }
    }
})