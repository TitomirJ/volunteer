import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    root: {
        width: '50%',
        height: '77px',
        position: 'absolute',
        left: 0,
        top: '78px',
        zIndex: '-1',
        background: props => props.color
    }
});