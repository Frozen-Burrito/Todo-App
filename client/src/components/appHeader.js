import React from 'react';

import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    header: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(2),
    }
}))

const AppHeader = () => {

    const classes = useStyles();

    return (
        <>
            <Typography variant="h2" gutterBottom className={classes.header}>
                Your Tasks
            </Typography>
        </>
    )
}

export default AppHeader;
