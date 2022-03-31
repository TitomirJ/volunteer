import React from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import { useStyles } from './styles';

const Loader = () => {
    const classes = useStyles();

    return (
        <div className={classes.pageLoader}>
            <CircularProgress />
        </div>
    );
};

export default Loader;
