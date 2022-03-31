import React from 'react';
import Container from '@mui/material/Container';
import Title from '../../components/Title';
import Grid from '@mui/material/Grid';
import {useStyles} from './styles';
import Button from '../../components/Button';
import {Link} from 'react-router-dom';

const WhichProjectsDone = ({projectsList}) => {
    const classes = useStyles();

    return (
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
    )
};

export default WhichProjectsDone;