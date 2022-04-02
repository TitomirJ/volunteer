import React, { useEffect, useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';

import { useStyles } from './styles';

const SuccessLinear = ({success, color}) => {
    const [progress, setProgress] = useState(0);
    const classes = useStyles({color});

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= success ? success : prevProgress + 10));
        }, 100);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <>
            <p className={classes.title}>{success}%</p>
            <LinearProgress
                variant="determinate"
                value={progress}
                className={classes.linear}
            />
        </>
    )
};

export default SuccessLinear;