import React, {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { NavHashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';

import Button from '../Button';
import LogoImg from '../../assests/images/Logo.png';
import LinkedInIcon from '../../assests/icons/LinkedInIcon';
import PhoneIcon from '../../assests/icons/PhoneIcon';
import InstagramIcon from '../../assests/icons/InstagramIcon';
import FacebookIcon from '../../assests/icons/FacebookIcon';
import TelegramIcon from '../../assests/icons/TelegramIcon';
import YoutubeIcon from '../../assests/icons/YoutubeIcon';
import TwitterIcon from '../../assests/icons/TwitterIcon';
import CloseIcon from '../../assests/icons/CloseIcon';
import MenuIcon from '../../assests/icons/MenuIcon';
import { useStyles } from './styles';

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
                                    <a href="tel:+380 (98) 157 68 90" className={classes.linksToContact}>
                                        +380 (98) 157 68 90
                                    </a>
                                    {
                                        !xsDevice &&
                                        <a href="mailto:bfIlovelife@gmail.com" className={classes.linksToContact}>
                                            bfIlovelife@gmail.com
                                        </a>
                                    }
                                </>
                        }
                        {
                            matches
                                ?
                                    <div className={classes.socialIconsBlock}>
                                        <a target="_blank"  href="https://www.linkedin.com/company/nazustrichzhittyu">
                                            <LinkedInIcon/>
                                        </a>
                                        <a href="tel:+380 (98) 157 68 90">
                                            <PhoneIcon/>
                                        </a>
                                        <a target="_blank"  href="https://instagram.com/towardslife2.0">
                                            <InstagramIcon/>
                                        </a>
                                        <a target="_blank"  href="https://www.facebook.com/bftowardslife">
                                            <FacebookIcon/>
                                        </a>
                                        <a target="_blank"  href="https://t.me/nazustrichzhittyu">
                                            <TelegramIcon/>
                                        </a>
                                        <a target="_blank"  href="https://twitter.com/nazustrichzhit1">
                                            <TwitterIcon/>
                                        </a>
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
                                        <Link to="/contacts">КOНТАКТЫ</Link>
                                    </div>
                                    <div className={classes.socialIconsBlock}>
                                        <a target="_blank"  href="https://www.linkedin.com/company/nazustrichzhittyu">
                                            <LinkedInIcon
                                                width="30"
                                                height="30"
                                            />
                                        </a>
                                        <a href="tel:+380 (98) 157 68 90">
                                            <PhoneIcon
                                                width="30"
                                                height="30"
                                            />
                                        </a>
                                        <a target="_blank"  href="https://instagram.com/towardslife2.0">
                                            <InstagramIcon
                                                width="30"
                                                height="30"
                                            />
                                        </a>
                                        <a target="_blank"  href="https://www.facebook.com/bftowardslife">
                                            <FacebookIcon
                                                width="30"
                                                height="30"
                                            />
                                        </a>
                                        <a target="_blank"  href="https://t.me/nazustrichzhittyu">
                                            <TelegramIcon
                                                width="30"
                                                height="30"
                                            />
                                        </a>
                                        <a target="_blank"  href="https://twitter.com/nazustrichzhit1">
                                            <TwitterIcon
                                                width="30"
                                                height="30"
                                            />
                                        </a>
                                    </div>
                                </>
                        }
                    </Container>
                </Toolbar>
                {
                    !menuOpened &&
                    <Toolbar className={classes.subMain}>
                        <Container className={`${classes.subMain} ${classes.sub}`} maxWidth="md">
                            <NavHashLink smooth to="/#header" className={classes.logo}>
                                <img src={LogoImg} alt=""/>
                            </NavHashLink>
                            {
                                matches &&
                                <div className={classes.menu}>
                                    <NavHashLink smooth to="/#aboutUs">КТО МЫ</NavHashLink>
                                    <NavHashLink smooth to="/#howToHelp">КАК ПОМОЧЬ</NavHashLink>
                                    <Link to="/projects">ПРОЕКТЫ</Link>
                                    <Link to="/contacts">КOНТАКТЫ</Link>
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