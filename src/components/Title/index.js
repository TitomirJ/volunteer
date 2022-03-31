import React from 'react';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    title: {
        color: '#2E4E6C',
        fontWeight: 700,
        fontSize: '48px',
        margin: '120px 0 17px',
        textTransform: 'uppercase',
        textAlign: 'center',

        ["@media (max-width: 769px)"]: {
            fontSize: '30px',
        }
    }
});

const Title = ({title}) => {
    const classes = useStyles();

    return (
        <h2 className={classes.title}>{title}</h2>
    )
};

export default Title;