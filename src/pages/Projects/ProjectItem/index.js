import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';

import InfoNav from '../../../components/InfoNav';
import Footer from '../../../components/Footer';
import Loader from '../../../components/Loader';
import Title from '../../../components/Title';
import SuccessLinear from '../../../components/SuccessLinear';
import Button from '../../../components/Button';

import { useStyles } from './styles';

const ProjectItem = (props) => {
    const [currentProject, setCurrentProject] = useState(null);
    const classes = useStyles();

    useEffect(() => {
        window.scrollTo(0, 0);

        if (props.match?.params?.id && props.projectsList.filter(project => project.id.toString() === props.match?.params?.id.toString()).length > 0) {
            setCurrentProject(props.projectsList.filter(project => project.id.toString() === props.match?.params?.id.toString())[0])
        } else {
            props.history.push('/projects')
        }
    }, []);

    return (
        <>
            {
                currentProject
                    ?
                        <>
                            <InfoNav/>
                            <main style={{ margin: "250px 0 140px" }}>
                                <Container maxWidth="md">
                                    <Title
                                        title={currentProject.name}
                                    />
                                    <img className={classes.img} src={`https://firebasestorage.googleapis.com/v0/b/volunteer-198f8.appspot.com/o/${currentProject.titleImage}`} alt=""/>
                                    <div className={classes.projectInfo}>
                                        <SuccessLinear
                                            color="#FFF8D1"
                                            success={currentProject.success}
                                        />
                                        {
                                            currentProject.success !== 100 &&
                                                <Button
                                                    className={classes.button}
                                                    width="270px"
                                                    variant="primary"
                                                >
                                                    помочь
                                                </Button>
                                        }
                                        <p>
                                            {currentProject.description}
                                        </p>
                                    </div>
                                </Container>
                                <Container maxWidth="md">
                                    <Title
                                        title="отчет о сборе средств"
                                    />
                                    {
                                        currentProject.files.map((item, index) =>
                                            <img
                                                className={classes.img}
                                                key={index}
                                                src={`https://firebasestorage.googleapis.com/v0/b/volunteer-198f8.appspot.com/o/${item}`}
                                                alt=""
                                            />
                                        )
                                    }
                                </Container>
                            </main>
                            <Footer/>
                        </>
                    : <Loader/>
            }
        </>
    )
};

export default ProjectItem;