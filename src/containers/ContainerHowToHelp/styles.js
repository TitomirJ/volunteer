import { makeStyles } from '@mui/styles';
import React from 'react';

export const useStyles = makeStyles({
    container: {
        background: 'rgba(217, 233, 241, 0.5)',
        padding: '10px 0 150px',
        marginTop: '140px',
        position: 'relative',
    },
    block: {
        background: 'rgba(25, 49, 81, 0.5)',
        height: '400px',
        padding: '39px 19px 0',
        textAlign: 'center',
        color: 'white',
        textTransform: 'uppercase',

        '& h4': {
            fontSize: '25px',
            textTransform: 'uppercase',
            color: '#FFFFFF',
            margin: '0 0 16px'
        },

        '& ul': {
            padding: 0,
            listStylePosition: 'inside'
        },

        '& span': {
            fontWeight: 700
        }
    }
});
