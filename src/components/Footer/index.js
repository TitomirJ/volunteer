import React from 'react';
import Container from '@mui/material/Container';
import { NavHashLink } from 'react-router-hash-link';
import { Grid } from '@mui/material';

import Button from '../Button';
import LinkedInIcon from '../../assests/icons/LinkedInIcon';
import PhoneIcon from '../../assests/icons/PhoneIcon';
import InstagramIcon from '../../assests/icons/InstagramIcon';
import FacebookIcon from '../../assests/icons/FacebookIcon';
import TelegramIcon from '../../assests/icons/TelegramIcon';
import YoutubeIcon from '../../assests/icons/YoutubeIcon';
import TwitterIcon from '../../assests/icons/TwitterIcon';
import LogoImg from '../../assests/images/Logo.png';
import { useStyles } from './styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {Link} from 'react-router-dom';

const Footer = () => {
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:1025px)');
    const xsDevice = useMediaQuery('(max-width:480px)');

    return (
        <div className={classes.footer}>
            <Container
                maxWidth="md"
            >
                <Grid
                    container
                    alignItems="center"
                    justifyContent="space-between"
                >
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
                        fontSize={!matches && "10px"}
                        width={matches ? "270px" : "130px"}
                    >
                        ПОЖЕРТВОВАТЬ
                    </Button>
                </Grid>
                <Grid
                    container
                    alignItems="center"
                    justifyContent="space-between"
                    style={{marginTop: '30px'}}
                >
                    <div className={classes.linksToContact}>
                        +380 930 309 4848
                    </div>
                    {
                        !xsDevice &&
                        <div className={classes.linksToContact}>
                            bfIlovelife@gmail.com
                        </div>
                    }
                    {
                        matches &&
                        <div className={classes.socialIconsBlock}>
                            <LinkedInIcon/>
                            <PhoneIcon/>
                            <InstagramIcon/>
                            <FacebookIcon/>
                            <TelegramIcon/>
                            <YoutubeIcon/>
                            <TwitterIcon/>
                        </div>
                    }
                </Grid>
            </Container>
        </div>
    )
};

export default Footer;