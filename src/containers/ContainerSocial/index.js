import React from 'react';
import Container from '@mui/material/Container';

import SubTitle from '../../components/SubTitle';
import LinkedInIcon from '../../assests/icons/LinkedInIcon';
import PhoneIcon from '../../assests/icons/PhoneIcon';
import InstagramIcon from '../../assests/icons/InstagramIcon';
import FacebookIcon from '../../assests/icons/FacebookIcon';
import TelegramIcon from '../../assests/icons/TelegramIcon';
import YoutubeIcon from '../../assests/icons/YoutubeIcon';
import TwitterIcon from '../../assests/icons/TwitterIcon';
import { useStyles } from './styles';

const ContainerSocial = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="md" style={{marginTop: "57px"}}>
            <SubTitle
                title={<>больше информации в наших <br/> социальных сетях:</>}
            />
            <div className={classes.social}>
                <a target="_blank"  href="https://www.linkedin.com/company/nazustrichzhittyu" className={classes.socialIcon}>
                    <LinkedInIcon
                        width="37"
                        height="37"
                        color="#2E4E6C"
                    />
                    <p>LinkedIn</p>
                </a>
                <div className={classes.line}> </div>
                <a href="tel:+380 (98) 157 68 90" className={classes.socialIcon}>
                    <PhoneIcon
                        width="37"
                        height="37"
                        color="#2E4E6C"
                    />
                    <p>viber</p>
                </a>
                <div className={classes.line}> </div>
                <a target="_blank"  href="https://instagram.com/towardslife2.0" className={classes.socialIcon}>
                    <InstagramIcon
                        width="37"
                        height="37"
                        color="#2E4E6C"
                    />
                    <p>Instagram</p>
                </a>
                <div className={classes.line}> </div>
                <a target="_blank"  href="https://www.facebook.com/bftowardslife" className={classes.socialIcon}>
                    <FacebookIcon
                        width="37"
                        height="37"
                        color="#2E4E6C"
                    />
                    <p>Facebook</p>
                </a>
                <div className={classes.line}> </div>
                <a target="_blank"  href="https://t.me/nazustrichzhittyu" className={classes.socialIcon}>
                    <TelegramIcon
                        width="37"
                        height="37"
                        color="#2E4E6C"
                    />
                    <p>telegram</p>
                </a>
                <div className={classes.line}> </div>
                <div className={classes.socialIcon}>
                    <YoutubeIcon
                        width="37"
                        height="37"
                        color="#2E4E6C"
                    />
                    <p>youtube</p>
                </div>
                <div className={classes.line}> </div>
                <a target="_blank"  href="https://twitter.com/nazustrichzhit1" className={classes.socialIcon}>
                    <TwitterIcon
                        width="37"
                        height="37"
                        color="#2E4E6C"
                    />
                    <p>Twitter</p>
                </a>
            </div>
        </Container>
    )
};

export default ContainerSocial;