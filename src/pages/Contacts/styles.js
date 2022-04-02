import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    block: {
        background: 'rgba(25, 49, 81, 0.5)',
        width: '100%',
        height: '168px',
        padding: '41px 0',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#FFF8D1',
        fontSize: '36px',
        textTransform: 'uppercase',
        marginTop: '60px',

        ["@media (max-width: 769px)"]: {
            fontSize: '20px',
        },

        '& p': {
            margin: '13px 0'
        },

        '& span': {
            color: 'rgba(255, 255, 255, 0.5)',
            fontSize: '16px'
        }
    },
    schedule: {
        background: '#EBF8FF',
        marginTop: '60px',
        padding: '61px 0',
        display: 'flex!important',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        fontWeight: 900,
        fontSize: '36px',
        lineHeight: '44px',
        color: '#2E4E6C',
        textAlign: 'center',

        ["@media (max-width: 769px)"]: {
            fontSize: '20px',
        },
    },
    requisites: {
        width: '100%',
        height: '383.53px',
        background: 'rgba(25, 49, 81, 0.5)',
        marginTop: '60px',
        fontSize: '16px',
        color: 'white',
        textTransform: 'uppercase',
        padding: '66px 58px 114px',

        '& div': {
            display: 'flex',
            alignItems: 'center',

            '& p': {
                marginLeft: '10px'
            }
        }
    }
});