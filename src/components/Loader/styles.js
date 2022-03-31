import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    pageLoader: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transformStyle: 'preserve-3d',
        transition: '700ms all ease'
    }
});