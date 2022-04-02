import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    main: {
        background: '#1C3350',
        height: '45px',
        minHeight: '45px',
        display: 'flex!important',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    mainMob: {
        background: '#1C3350',
        minHeight: '320px',
        height: '320px',
        padding: '10px 0',
    },
    logo: {
        '& img': {
            width: '100px',

            ["@media (min-width: 1025px)"]: {
                width: '150px',
            }
        },
    },
    subMain: {
        backdropFilter: 'blur(10px) brightness(40%)',
        height: '130px',
        display: 'flex!important',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    socialIconsBlock: {
        width: '300px',
        display: 'flex',
        justifyContent: 'space-between',

        '& svg': {
            cursor: 'pointer',

            '&:hover': {
                '& path': {
                    fill: '#fff856'
                }
            }
        },

        ["@media (max-width: 1024px)"]: {
            display: 'grid',
            justifyContent: 'space-between',
            gridTemplateColumns: 'repeat(4, auto)',
            gridTemplateRows: 'repeat(1, auto)',
            float: 'left',
            flexDirection: 'column',
            textAlign: 'center',
            width: '100%',

            '& svg': {
                cursor: 'pointer',
                marginBottom: '30px'
            },
        },
    },
    linksToContact: {
        fontWeight: 'bold',
        cursor: 'pointer'
    },
    menu: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '14px',
        padding: '0 25px',
        fontWeight: 700,

        ["@media (max-width: 1024px)"]: {
            display: 'grid',
            justifyContent: 'center',
            gridTemplateColumns: 'repeat(2, auto)',
            gridTemplateRows: 'repeat(1, auto)',
            float: 'left',
            fontSize: '15px',
            flexDirection: 'column',
            padding: '20px 0 26px 0',
            textAlign: 'center',
            width: '100%',
            borderBottom: '2px solid #FFFFFF',
            marginBottom: '26px'
        },

        '& a, & p': {
            cursor: 'pointer',
            color: 'white',
            textDecoration: 'none',
            margin: '10px 0',

            '&::after': {
                content: '"|"',
                padding: '35px',

                ["@media (max-width: 1024px)"]: {
                    padding: '15px',
                }
            },
            '&:last-child': {
                '&::after': {
                    content: '""',
                    padding: '0'
                },
            },
        }
    }
}));