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
    }
});