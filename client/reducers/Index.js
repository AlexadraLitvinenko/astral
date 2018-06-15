import { combineReducers } from 'redux';

import listReducer from './ListReducers';

const rootReducer = combineReducers({
    listReducer
});

export default rootReducer;