import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    block: {
        width: '120px',
        height: '120px',
        borderRadius: '60px',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        cursor: 'pointer',

        '&:hover': {
            filter: 'grayscale(100%)',
        }
    }
});
