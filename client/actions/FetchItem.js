import axios from 'axios';

import fetchBegin from './fetchItemsBegin'; 
import fetchSuccess from './fetchItemsSuccess';
import fetchError from './fetchItemsError';

export default id => {
    return dispatch => {
        dispatch(fetchBegin());
        return axios.post('/api/book/:id', { id })
            .then(res => dispatch(fetchSuccess(...res.data)))
            .catch(err => dispatch(fetchError(err)));  
    };
};