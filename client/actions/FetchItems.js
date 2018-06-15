import axios from 'axios';

import fetchItemsBegin from './fetchItemsBegin'; 
import fetchItemsSuccess from './fetchItemsSuccess';
import fetchItemsError from './fetchItemsError';

export default () => {
    return dispatch => {
        dispatch(fetchItemsBegin());
        return axios.get('/api/books')
            .then(res => dispatch(fetchItemsSuccess(res.data)))
            .catch(err => dispatch(fetchItemsError(err)));  
    };
};