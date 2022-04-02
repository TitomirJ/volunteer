import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    wrapper: {
        display: 'flex!important',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        textTransform: 'uppercase',
        color: '#56555F',
        fontWeight: 500,
        position: 'relative',

        '& span': {
            fontWeight: 700,
        }
    },
    button: {
        width: '270px',
        marginTop: '50px'
    }
});