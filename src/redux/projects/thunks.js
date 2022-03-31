import { fetchProjectsApi } from '../../api';

import  {
    getProjectsError,
    getProjectsSuccess,
    getProjectsRequest
} from './actions';

export const getProjects = () => (dispatch) => {
    dispatch(getProjectsRequest());

    return fetchProjectsApi()
        .then((res) => {
            dispatch(getProjectsSuccess(res));
            return res;
        })
        .catch(({ message }) => {
            dispatch(getProjectsError(message));
        });
};
