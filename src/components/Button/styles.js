import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    button: {
        minHeight: '48px',
        minWidth: 'unset',
        borderRadius: 8,
        width: props => props.width ? props.width : '100%',
        textTransform: 'initial',
        fontWeight: '600',
        fontSize: '16px!important',
        padding: '17px 30px!important',

        ["@media (max-width: 1024px)"]: {
            fontSize: '12px!important',
        },

        '&.Mui-disabled': {
            color: 'rgba(0, 0, 0, 0.26)',
            background: '#c7c7c747',
            border: 'none'
        }
    },
    outline: {
        background: 'transparent',
        color: '#B3E3FF!important',
        border: '1px solid #B3E3FF!important',
        fontWeight: '900!important',
        borderRadius: '0!important'
    },
    primary: {
        backgroundColor: '#0066FF!important',
        color: 'white!important',
        fontWeight: '900!important',
        borderRadius: '0!important'
    },
    outlinePrimary: {
        background: 'transparent',
        color: '#0066FF!important',
        border: '1px solid #0066FF!important',
        fontWeight: '900!important',
        borderRadius: '0!important',

        '&:hover': {
            background: '#0066FF!important',
            color: 'white!important',
        }
    },
    yellowPrimary: {
        backgroundColor: '#FFF8D1!important',
        color: '#0066FF!important',
        fontWeight: '900!important',
        borderRadius: '0!important'
    },
    link: {
        textDecoration: 'none'
    }
});
