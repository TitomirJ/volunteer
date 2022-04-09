import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

import Title from '../../components/Title';
import SuccessLinear from '../../components/SuccessLinear';
import LineBg from '../../components/LineBg';
import { useStyles } from './styles';

const ContainerProjectsListToSuccess = ({projectsList}) => {
    const classes = useStyles();

    return (
        <div style={{position: 'relative', padding: '2px 0'}}>
            <LineBg color="#FFFAE1"/>
            <Container maxWidth="md">
                <Title
                    title="помогите нам собрать средства"
                />
                <Grid container spacing={4}>
                    {
                        projectsList.filter(item => item.success < 100).map(project =>
                            <Grid
                                item
                                xs={12}
                                md={4}
                                key={project.id}
                            >
                                <Link to={`/projects/${project.id}`} className={classes.block}>
                                    <div className={classes.blockImg} style={{backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/volunteer-198f8.appspot.com/o/${project.titleImage})`}}>
                                    </div>
                                    <h3 className={classes.title}>{project.name}</h3>
                                    <p className={classes.description}>{project.description}</p>
                                    <SuccessLinear
                                        success={project.success}
                                    />
                                </Link>
                            </Grid>
                        )
                    }
                </Grid>
            </Container>
        </div>
    )
};

export default ContainerProjectsListToSuccess;