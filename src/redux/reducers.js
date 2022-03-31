import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import projects from './projects';

const createAppReducer = (history) => combineReducers({
    router: connectRouter(history),
    projects,
});

export default createAppReducer;

