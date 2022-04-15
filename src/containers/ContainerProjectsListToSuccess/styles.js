import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    block: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
        background: 'white',
        padding: '20px',
        borderRadius: '20px',
        transition: '0.5s',
        textDecoration: 'none',

        '&:hover': {
            background: '#0166ff0f',
        }
    },
    title: {
        color: '#0066FF',
        fontWeight: 700,
        fontSize: '25px',
        borderBottom: '1px solid #0066FF',
        paddingBottom: '3px',
    },
    blockImg: {
        width: '370px',
        height: '370px',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        borderRadius: '200px',

        ["@media (max-width: 1024px)"]: {
            width: '300px',
            height: '300px',
        }
    },
    description: {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        height: '60px',
        width: '100%',
        fontSize: '16px',
        textTransform: 'uppercase',
        color: '#56555F',
        textAlign: 'center',
        display: '-webkit-box !important',
        ['-webkit-line-clamp']: 3,
        ['-webkit-box-orient']: 'vertical',
        whiteSpace: 'normal'
    }
});