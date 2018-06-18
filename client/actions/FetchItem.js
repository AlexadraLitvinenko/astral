import axios from 'axios';

import fetchBegin from './FetchBegin'; 
import fetchSuccess from './FetchSuccess';
import fetchError from './FetchError';

export default id => {
    return dispatch => {
        dispatch(fetchBegin());
        return axios.get('/api/book/:id', { params: { id } })
            .then(res => dispatch(fetchSuccess(...res.data)))
            .catch(err => dispatch(fetchError(err)));  
    };
};