import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    block: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    },
    blockImg: {
        width: '270px',
        height: '270px',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        borderRadius: '150px',
        margin: '60px 0 47px'
    },
    button: {
        minHeight: '48px',
        minWidth: 'unset',
        textTransform: 'initial',
        fontSize: '16px!important',
        padding: '17px 30px!important',
        textDecoration: 'none',
        background: 'transparent',
        color: '#0066FF!important',
        border: '1px solid #0066FF!important',
        fontWeight: '900!important',
        borderRadius: '0!important',
        textAlign: 'center',
        lineHeight: '30px',

        '&:hover': {
            background: '#0066FF!important',
            color: 'white!important',
        }
    }
});