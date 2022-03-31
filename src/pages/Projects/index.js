import React, { useEffect } from 'react';

import { Route, Switch } from 'react-router-dom';
import ProjectItem from './ProjectItem';
import ProjectsList from './ProjectsList';

const Projects = (props) => {
    const {
        projectsList
    } = props;

    return (
        <>
            <Switch>
                <Route
                    exact
                    path="/projects"
                    component={(props) =>
                        <ProjectsList
                            {...props}
                            projectsList={projectsList}
                        />
                    }
                />
                <Route
                    path="/projects/:id"
                    component={(props) =>
                        <ProjectItem
                            {...props}
                            projectsList={projectsList}
                        />
                    }
                />
            </Switch>
        </>
    )
};

export default Projects;