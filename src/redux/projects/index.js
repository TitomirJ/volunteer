import projects from './reducer';

export { getProjects } from './thunks';
export { selectProjectsLoading, selectProjects, selectProjectsError} from './selectors';

export default projects;