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
                <div className={classes.socialIcon}>
                    <LinkedInIcon
                        width="37"
                        height="37"
                        color="#2E4E6C"
                    />
                    <p>LinkedIn</p>
                </div>
                <div className={classes.line}> </div>
                <div className={classes.socialIcon}>
                    <PhoneIcon
                        width="37"
                        height="37"
                        color="#2E4E6C"
                    />
                    <p>viber</p>
                </div>
                <div className={classes.line}> </div>
                <div className={classes.socialIcon}>
                    <InstagramIcon
                        width="37"
                        height="37"
                        color="#2E4E6C"
                    />
                    <p>Instagram</p>
                </div>
                <div className={classes.line}> </div>
                <div className={classes.socialIcon}>
                    <FacebookIcon
                        width="37"
                        height="37"
                        color="#2E4E6C"
                    />
                    <p>Facebook</p>
                </div>
                <div className={classes.line}> </div>
                <div className={classes.socialIcon}>
                    <TelegramIcon
                        width="37"
                        height="37"
                        color="#2E4E6C"
                    />
                    <p>telegram</p>
                </div>
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
                <div className={classes.socialIcon}>
                    <TwitterIcon
                        width="37"
                        height="37"
                        color="#2E4E6C"
                    />
                    <p>Twitter</p>
                </div>
            </div>
        </Container>
    )
};

export default ContainerSocial;