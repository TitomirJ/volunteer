import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import Title from '../../components/Title';
import { useStyles } from './styles';
import Button from '../../components/Button';
import CardIcon from '../../assests/icons/CardIcon';
import LineBg from '../../components/LineBg';

const ContainerHowToHelp = () => {
    const classes = useStyles();

    return (
        <div id="howToHelp" className={classes.container}>
            <LineBg color="rgb(255 242 175)"/>
            <Container
                maxWidth="md"
            >
                <Title
                    title="как помочь"
                />
                <Grid
                    container
                    spacing={4}
                    style={{marginTop: '60px'}}
                >
                    <Grid
                        item
                        xs={12}
                        md={4}
                    >
                        <div className={classes.block}>
                            <h4>финансовая поддержка</h4>
                            <Button variant="primary">ПОЖЕРТВОВАТЬ</Button>
                            <Button to="/projects" style={{margin: "33px 0"}} variant="outline">помогите нам собрать средства на...</Button>
                            <Grid
                                container
                                alignItems="center"
                                justifyContent="center"
                                style={{cursor: "pointer"}}
                            >
                                <CardIcon/>
                                <p style={{fontWeight: 700, marginLeft: "16px"}}>НАШИ РЕКВИЗИТЫ</p>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={4}
                    >
                        <div className={classes.block}>
                            <h4>гуманитарная помощь</h4>
                            <p>
                                свяжитесь с нашими <span>волонтерами</span> в любой удобной для вас <span>социальной сети</span> (или по тел.. +380....)
                                <br/><br/>
                                мы сообщим вам <span>актуальный список</span> необходимой помощи и <span>организуем доставку</span> в города Украины
                            </p>
                        </div>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={4}
                    >
                        <div className={classes.block}>
                            <h4>стать <br/> волонтером</h4>
                            <ul>
                                <span>помощь нужна</span> самая разная. все зависит от вашего <span>желания</span> и свободного <span>времени</span>:
                                <li>репосты</li>
                                <li>расспространение информации</li>
                                <li>сбор гуманитарной помощи</li>
                                <li>физическая помощь</li>
                                <li>поиск финансов</li>
                                <li>помощь, исходя из ваших навыков (сварщик, швея, водитель ...)</li>
                                <li>ваш вариант</li>
                            </ul>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
};

export default ContainerHowToHelp;