import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

import Title from '../../components/Title';
import { useStyles } from './styles';
import LineBg from '../../components/LineBg';

const ContainerWhatWeDid = ({projectsList}) => {
    const classes = useStyles();

    return (
        <div style={{position: 'relative', padding: '2px 0'}}>
            <LineBg color="#EBF8FF"/>
            <Container maxWidth="md">
                <Title
                    title="что уже сделано"
                />
                <Grid
                    container
                    spacing={4}
                    style={{marginTop: '60px'}}
                >
                    {
                        projectsList.filter(item => item.success === 100).map((item, index) =>
                            <Grid
                                item
                                xs={6}
                                md={2}
                                key={index}
                            >
                                <Link to={`/projects/${item.id}`}>
                                    <div style={{backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/volunteer-198f8.appspot.com/o/${item.titleImage})`}} className={classes.block}/>
                                </Link>
                            </Grid>
                        )
                    }
                </Grid>
            </Container>
        </div>
    )
};

export default ContainerWhatWeDid;