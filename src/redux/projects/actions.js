import {
    GET_PROJECTS_ERROR,
    GET_PROJECTS_SUCCESS,
    GET_PROJECTS_REQUEST
} from './constants';

export const getProjectsRequest = () => ({ type: GET_PROJECTS_REQUEST });
export const getProjectsSuccess = (projects) => ({ type: GET_PROJECTS_SUCCESS, payload: projects });
export const getProjectsError = ({ message }) => ({ type: GET_PROJECTS_ERROR, message });