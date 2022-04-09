import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    img: {
        marginTop: '60px',
        width: '100%'
    },
    projectInfo: {
        background: 'rgba(25, 49, 81, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '42px 100px',
        marginTop: '60px',
        color: '#FFFFFF',
        fontSize: '16px',
        textTransform: 'uppercase',
        textAlign: 'center',

        ["@media (max-width: 768px)"]: {
            padding: '42px',
        }
    },
    button: {
        margin: '30px 0!important',
    },
    pdfContainer: {
        height: '600px',
        overflow: 'scroll'
    }
});
