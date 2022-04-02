import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useStyles } from './styles';

import Button from '../../components/Button';
import Title from '../../components/Title';
import LineBg from '../../components/LineBg';

const WhichProjectsDone = ({projectsList}) => {
    const classes = useStyles();

    return (
        <div style={{background: 'rgba(217, 233, 241, 0.5)', position: 'relative', padding: '2px 0px 140px', marginTop: '150px'}}>
            <LineBg color="rgb(255 242 175)"/>
            <Container maxWidth="md">
                <Title
                    title="Что у нас получилось"
                />
                <Grid container spacing={4}>
                    {
                        projectsList.filter(item => item.success === 100).map(project =>
                            <Grid
                                item
                                xs={12}
                                md={3}
                                key={project.id}
                            >
                                <div className={classes.block}>
                                    <div className={classes.blockImg} style={{backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/volunteer-198f8.appspot.com/o/${project.titleImage})`}}> </div>
                                    <Button to={`/projects/${project.id}`} variant="outlinePrimary">
                                        <span>{project.startDate} - {project.endDate} <br/> Посмотреть</span>
                                    </Button>
                                </div>
                            </Grid>
                        )
                    }
                </Grid>
            </Container>
        </div>
    )
};

export default WhichProjectsDone;