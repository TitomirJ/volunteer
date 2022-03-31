import React from 'react';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    title: {
        color: '#2E4E6C',
        fontWeight: 700,
        fontSize: '36px',
        margin: '0 0 60px',
        textTransform: 'uppercase',
        textAlign: 'center',

        ["@media (max-width: 769px)"]: {
            fontSize: '20px',
        }
    }
});

const SubTitle = ({title}) => {
    const classes = useStyles();

    return (
        <h3 className={classes.title}>{title}</h3>
    )
};

export default SubTitle;