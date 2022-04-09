import React, { useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import InfoNav from '../../components/InfoNav';
import LineBg from '../../components/LineBg';
import Title from '../../components/Title';
import PhoneIcon from '../../assests/icons/PhoneIcon';
import EmailIcon from '../../assests/icons/EmailIcon';
import ContainerSocial from '../../containers/ContainerSocial';
import SubTitle from '../../components/SubTitle';
import ClockIcon from '../../assests/icons/ClockIcon';
import Footer from '../../components/Footer';
import UkrainianFlagIcon from '../../assests/icons/UkrainianFlagIcon';
import EarthIcon from '../../assests/icons/EarthIcon';
import { useStyles } from './styles';

const Contacts = () => {
    const classes = useStyles();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <InfoNav/>
            <main style={{ margin: "195px 0 140px" }}>
                <div style={{position: 'relative', padding: '2px 0 0'}}>
                    <LineBg color="#FFFAE1"/>
                    <Container maxWidth="md">
                        <Title
                            title="контактная информация"
                        />
                        <Grid
                            container
                            spacing={2}
                        >
                            <Grid item xs={12} md={6}>
                                <div className={classes.block}>
                                    <PhoneIcon
                                        width="60"
                                        height="60"
                                        color="#FFF8D1"
                                    />
                                    <a href="tel:+380 (98) 157 68 90">
                                        +380 (98) 157 68 90
                                    </a>
                                    <span>телефон</span>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <div className={classes.block}>
                                    <EmailIcon
                                        width="60"
                                        height="60"
                                        color="#FFF8D1"
                                    />
                                    <a href="mailto:bfIlovelife@gmail.com">bfIlovelife@gmail.com</a>
                                    <span>e-mail</span>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                    <ContainerSocial/>
                    <Container className={classes.schedule} maxWidth="md">
                        <SubTitle title="график работы"/>
                        <ClockIcon/>
                        <p>пн - вс с 10:00 до 20:00</p>
                    </Container>
                    <div style={{position: 'relative', padding: '2px 0 0'}}>
                        <Title title="наши реквизиты"/>
                        <LineBg color="#FFFAE1"/>
                        <Container className={classes.requisites} maxWidth="md">
                            <div style={{marginBottom: '140px'}}>
                                <UkrainianFlagIcon/>
                                <p>реквизиты для совершения оплаты в пределах украины:</p>
                            </div>
                            <div>
                                <EarthIcon
                                    width="34"
                                />
                                <p>реквизиты для совершения оплаты за пределами украины:</p>
                            </div>
                        </Container>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
};

export default Contacts;