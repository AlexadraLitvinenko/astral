import axios from 'axios';

import fetchItemsBegin from './FetchBegin'; 
import fetchItemsSuccess from './FetchSuccess';
import fetchItemsError from './FetchError';

export default () => {
    return dispatch => {
        dispatch(fetchItemsBegin());
        return axios.get('/api/books')
            .then(res => dispatch(fetchItemsSuccess(res.data)))
            .catch(err => dispatch(fetchItemsError(err)));  
    };
};