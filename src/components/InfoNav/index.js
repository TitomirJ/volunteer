import React, {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { NavHashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';

import LogoImg from '../../assests/images/Logo.png';
import LinkedInIcon from '../../assests/icons/LinkedInIcon';
import PhoneIcon from '../../assests/icons/PhoneIcon';
import InstagramIcon from '../../assests/icons/InstagramIcon';
import FacebookIcon from '../../assests/icons/FacebookIcon';
import TelegramIcon from '../../assests/icons/TelegramIcon';
import YoutubeIcon from '../../assests/icons/YoutubeIcon';
import TwitterIcon from '../../assests/icons/TwitterIcon';
import Button from '../Button';
import MenuIcon from '../../assests/icons/MenuIcon';
import { useStyles } from './styles';
import CloseIcon from '../../assests/icons/CloseIcon';

const InfoNav = () => {
    const classes = useStyles();
    const [menuOpened, setMenuOpened] = useState(false);

    const matches = useMediaQuery('(min-width:1025px)');
    const xsDevice = useMediaQuery('(max-width:768px)');

    useEffect(() => {
        if (matches) {
            setMenuOpened(false);
        }
    }, [matches]);

    useEffect(() => {
        const onScroll = () => setMenuOpened(false);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            <AppBar style={{background: 'transparent'}}>
                <Toolbar className={!menuOpened ? classes.main : classes.mainMob}>
                    <Container className={!menuOpened ? classes.main : classes.mainMob} maxWidth="md">
                        {
                            !menuOpened &&
                                <>
                                    <div className={classes.linksToContact}>
                                        +380 930 309 4848
                                    </div>
                                    {
                                        !xsDevice &&
                                        <div className={classes.linksToContact}>
                                            bfIlovelife@gmail.com
                                        </div>
                                    }
                                </>
                        }
                        {
                            matches
                                ?
                                    <div className={classes.socialIconsBlock}>
                                        <LinkedInIcon/>
                                        <PhoneIcon/>
                                        <InstagramIcon/>
                                        <FacebookIcon/>
                                        <TelegramIcon/>
                                        <YoutubeIcon/>
                                        <TwitterIcon/>
                                    </div>
                                :
                                    <div style={{float: 'right'}} onClick={() => setMenuOpened(prevState => !prevState)}>
                                        {
                                            menuOpened
                                                ?
                                                    <CloseIcon/>
                                                :
                                                    <MenuIcon/>
                                        }
                                    </div>
                        }
                        {
                            menuOpened &&
                                <>
                                    <div className={classes.menu}>
                                        <NavHashLink smooth to="/#aboutUs">КТО МЫ</NavHashLink>
                                        <NavHashLink smooth to="/#howToHelp">КАК ПОМОЧЬ</NavHashLink>
                                        <Link to="/projects">ПРОЕКТЫ</Link>
                                        <p>КOНТАКТЫ</p>
                                    </div>
                                    <div className={classes.socialIconsBlock}>
                                        <LinkedInIcon
                                            width="30"
                                            height="30"
                                        />
                                        <PhoneIcon
                                            width="30"
                                            height="30"
                                        />
                                        <InstagramIcon
                                            width="30"
                                            height="30"
                                        />
                                        <FacebookIcon
                                            width="30"
                                            height="30"
                                        />
                                        <TelegramIcon
                                            width="30"
                                            height="30"
                                        />
                                        <YoutubeIcon
                                            width="30"
                                            height="30"
                                        />
                                        <TwitterIcon
                                            width="30"
                                            height="30"
                                        />
                                    </div>
                                </>
                        }
                    </Container>
                </Toolbar>
                {
                    !menuOpened &&
                    <Toolbar className={classes.subMain}>
                        <Container className={classes.subMain} maxWidth="md">
                            <NavHashLink smooth to="/#header" className={classes.logo}>
                                <img src={LogoImg} alt=""/>
                            </NavHashLink>
                            {
                                matches &&
                                <div className={classes.menu}>
                                    <NavHashLink smooth to="/#aboutUs">КТО МЫ</NavHashLink>
                                    <NavHashLink smooth to="/#howToHelp">КАК ПОМОЧЬ</NavHashLink>
                                    <Link to="/projects">ПРОЕКТЫ</Link>
                                    <p>КOНТАКТЫ</p>
                                </div>
                            }
                            <Button
                                variant="outline"
                                width={matches ? "270px" : "130px"}
                            >
                                ПОЖЕРТВОВАТЬ
                            </Button>
                        </Container>
                    </Toolbar>
                }
            </AppBar>
        </>
    )
};

export default InfoNav;