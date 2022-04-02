import React from 'react';

import { useStyles } from './styles';

const LineBg = ({color}) => {
    const classes = useStyles({color});

    return (
        <div className={classes.root} />
    )
};

export default LineBg;