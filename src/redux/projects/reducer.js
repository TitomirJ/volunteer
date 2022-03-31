import {
   GET_PROJECTS_REQUEST,
    GET_PROJECTS_SUCCESS,
    GET_PROJECTS_ERROR
} from './constants';

const initialState = {
    data: [],
    loading: true,
    error: null
};

const projects = (state = initialState, action) => {
    switch (action.type) {
        case GET_PROJECTS_REQUEST: {
            return {
                ...state,
                loading: true
            };
        }

        case GET_PROJECTS_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                loading: false
            };
        }

        case GET_PROJECTS_ERROR: {
            return {
                ...state,
                loading: false,
                data: null,
                error: action.payload
            };
        }

        default:
            return state;
    }
};

export default projects;