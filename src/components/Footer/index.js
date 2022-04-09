import React from 'react';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { Grid } from '@mui/material';

import Button from '../Button';
import LinkedInIcon from '../../assests/icons/LinkedInIcon';
import PhoneIcon from '../../assests/icons/PhoneIcon';
import InstagramIcon from '../../assests/icons/InstagramIcon';
import FacebookIcon from '../../assests/icons/FacebookIcon';
import TelegramIcon from '../../assests/icons/TelegramIcon';
import TwitterIcon from '../../assests/icons/TwitterIcon';
import LogoImg from '../../assests/images/Logo.png';
import { useStyles } from './styles';

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
                    <a href="tel:+380 (98) 157 68 90" className={classes.linksToContact}>
                        +380 (98) 157 68 90
                    </a>
                    {
                        !xsDevice &&
                        <a href="mailto:bfIlovelife@gmail.com" className={classes.linksToContact}>
                            bfIlovelife@gmail.com
                        </a>
                    }
                    {
                        matches &&
                        <div className={classes.socialIconsBlock}>
                            <a target="_blank" href="https://www.linkedin.com/company/nazustrichzhittyu">
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
                    }
                </Grid>
            </Container>
        </div>
    )
};

export default Footer;