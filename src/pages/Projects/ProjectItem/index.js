import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { ProgressBar, Viewer } from '@react-pdf-viewer/core';

import InfoNav from '../../../components/InfoNav';
import Footer from '../../../components/Footer';
import Loader from '../../../components/Loader';
import LineBg from '../../../components/LineBg';
import Title from '../../../components/Title';
import SuccessLinear from '../../../components/SuccessLinear';
import Button from '../../../components/Button';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { useStyles } from './styles';

const ProjectItem = (props) => {
    const classes = useStyles();
    const [currentProject, setCurrentProject] = useState(null);
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

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
                            <main style={{ margin: "195px 0 140px" }}>
                                <div style={{background: 'rgba(217, 233, 241, 0.5)', position: 'relative', padding: '2px 0px 140px'}}>
                                    <LineBg color="rgb(255 242 175)"/>
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
                                </div>
                                {
                                    currentProject.files && currentProject.files.length > 0 &&
                                    <div style={{position: 'relative', padding: '2px 0px 140px'}}>
                                        <LineBg color="#FFFAE1"/>
                                        <Container maxWidth="md">
                                            <Title
                                                title="отчет о сборе средств"
                                            />
                                            {
                                                currentProject.files.map((item, index) => {
                                                    return (
                                                        <div
                                                            key={index}
                                                            style={{
                                                                border: '1px solid rgba(0, 0, 0, 0.3)',
                                                                height: '750px',
                                                                marginTop: '100px'
                                                            }}
                                                        >
                                                            <Viewer
                                                                renderLoader={(percentages) => (
                                                                    <div style={{ width: '240px' }}>
                                                                        <ProgressBar progress={Math.round(percentages)} />
                                                                    </div>
                                                                )}
                                                                plugins={[
                                                                    defaultLayoutPluginInstance,
                                                                ]}
                                                                fileUrl={`https://firebasestorage.googleapis.com/v0/b/volunteer-198f8.appspot.com/o/${item}`}
                                                            />
                                                        </div>
                                                    )
                                                })
                                            }
                                        </Container>
                                    </div>
                                }
                            </main>
                            <Footer/>
                        </>
                    : <Loader/>
            }
        </>
    )
};

export default ProjectItem;