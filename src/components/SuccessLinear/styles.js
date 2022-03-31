import { makeStyles } from '@mui/styles';
import {linearProgressClasses} from '@mui/material/LinearProgress';

export const useStyles = makeStyles({
    title: {
        color: props => props.color ? props.color : '#0066FF',
        fontWeight: 700,
        fontSize: '25px'
    },
    linear: {
        height: '50px!important',
        width:'100%',
        borderRadius: 0,
        border: props => props.color ? `2px solid ${props.color}` : '2px solid #0066FF',

        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: 'transparent',
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 0,
            backgroundColor: props => props.color ? props.color : '#0066FF',
        },
    }
});