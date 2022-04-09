import React, { useEffect } from 'react';

import InfoNav from '../../../components/InfoNav';
import ContainerProjectsListToSuccess from '../../../containers/ContainerProjectsListToSuccess';
import WhichProjectsDone from '../../../containers/WhichProjectsDone';
import Footer from '../../../components/Footer';

const ProjectsList = ({projectsList}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <InfoNav/>
            <main style={{ margin: "250px 0 140px" }}>
                <ContainerProjectsListToSuccess
                    projectsList={projectsList}
                />
                {
                    projectsList.filter(item => item.success === 100).length > 0 &&
                        <WhichProjectsDone
                            projectsList={projectsList}
                        />
                }
            </main>
            <Footer/>
        </>
    )
};

export default ProjectsList;