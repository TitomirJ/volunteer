import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Main from './pages/Main';
import Projects from './pages/Projects';
import {
    getProjects,
    selectProjects,
    selectProjectsError,
    selectProjectsLoading
} from './redux/projects';
import Loader from './components/Loader';
import ProjectItem from './pages/Projects/ProjectItem';

const App = (props) => {
    const {
        projectsList,
        getProjects,
        projectsLoading
    } = props;

    useEffect(() => {
        if (projectsList.length === 0 && projectsLoading) {
            getProjects();
        }
    }, [projectsList]);

    return (
        <>
            {
                !projectsLoading
                    ?
                        <Router>
                            <Switch>
                                <Route
                                    path="/"
                                    component={() =>
                                        <Main
                                            {...props}
                                            projectsList={projectsList}
                                        />
                                    }
                                    exact
                                />
                                <Route
                                    path="/projects"
                                    component={() =>
                                        <Projects
                                            {...props}
                                            projectsList={projectsList}
                                        />
                                    }
                                />
                            </Switch>
                        </Router>
                    :
                        <Loader/>
            }
        </>
    );
}

const mapStateToProps = (state) => ({
    projectsLoading: selectProjectsLoading(state),
    projectsList: selectProjects(state),
    projectsError: selectProjectsError(state)
});

const mapDispatchToProps = ({
    getProjects: getProjects,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);