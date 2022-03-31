import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';

import { useStyles } from './styles';

const SuccessLinear = ({success, color}) => {
    const classes = useStyles({color});

    return (
        <>
            <p className={classes.title}>{success}%</p>
            <LinearProgress
                variant="determinate"
                value={success}
                className={classes.linear}
            />
        </>
    )
};

export default SuccessLinear;