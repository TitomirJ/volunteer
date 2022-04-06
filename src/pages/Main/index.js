import React, { useEffect } from 'react';

import InfoNav from '../../components/InfoNav';
import Header from '../../containers/Header';
import ContainerAbout from '../../containers/ContainerAbout';
import ContainerHowToHelp from '../../containers/ContainerHowToHelp';
import ContainerWhatWeDid from '../../containers/ContainerWhatWeDid';
import ContainerSocial from '../../containers/ContainerSocial';
import ContainerOurTeam from '../../containers/ContainerOurTeam';
import Footer from '../../components/Footer';

const Main = ({projectsList}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <InfoNav/>
            <Header/>
            <main>
                <ContainerAbout/>
                <ContainerHowToHelp/>
                {/*<ContainerWhatWeDid*/}
                {/*    projectsList={projectsList}*/}
                {/*/>*/}
                <ContainerSocial/>
                <ContainerOurTeam/>
            </main>
            <Footer/>
        </>
    )
};

export default Main;