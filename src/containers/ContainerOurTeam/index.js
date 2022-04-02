import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import Title from '../../components/Title';
import TeamMemberOne from '../../assests/images/IMG_4558.png';
import TeamMemberTwo from '../../assests/images/IMG_4559.png';
import TeamMemberThree from '../../assests/images/photo_2022-03-28_13-05-16.jpg';
import TeamMemberFour from '../../assests/images/photo_2022-03-28_13-48-01.jpg';
import Button from '../../components/Button';
import LineBg from '../../components/LineBg';
import { useStyles } from './styles';

const ContainerOurTeam = () => {
    const classes = useStyles();

    return (
        <div style={{position: 'relative', padding: '2px 0'}}>
            <LineBg color="#FFFAE1"/>
            <Container maxWidth="md" style={{marginTop: "57px", marginBottom: "140px"}}>
                <Title
                    title="наша команда"
                />
                <Grid
                    container
                    spacing={4}
                    style={{marginTop: '60px'}}
                >
                    <Grid
                        container
                        direction="column"
                        alignItems="center"
                        item
                        xs={12}
                        md={6}
                        lg={3}
                    >
                        <div className={classes.blockImg} style={{backgroundImage: `url(${TeamMemberOne})`}}/>
                        <Button variant="outlinePrimary">евгений <br/> самойленко</Button>
                    </Grid>
                    <Grid
                        container
                        direction="column"
                        alignItems="center"
                        item
                        xs={12}
                        md={6}
                        lg={3}
                    >
                        <div className={classes.blockImg} style={{backgroundImage: `url(${TeamMemberTwo})`}}/>
                        <Button variant="outlinePrimary">дарья <br/> игнатьева</Button>
                    </Grid>
                    <Grid
                        container
                        direction="column"
                        alignItems="center"
                        item
                        xs={12}
                        md={6}
                        lg={3}
                    >
                        <div className={classes.blockImg} style={{backgroundImage: `url(${TeamMemberThree})`}}/>
                        <Button variant="outlinePrimary">владислав <br/> шевченко</Button>
                    </Grid>
                    <Grid
                        container
                        direction="column"
                        alignItems="center"
                        item
                        xs={12}
                        md={6}
                        lg={3}
                    >
                        <div className={classes.blockImg} style={{backgroundImage: `url(${TeamMemberFour})`}}/>
                        <Button variant="outlinePrimary">юлианна <br/> кушнир</Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
};

export default ContainerOurTeam;