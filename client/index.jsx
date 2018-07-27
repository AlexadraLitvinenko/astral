import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'mobx-react';

import App from './components/App';
import Store from './store/Store';

render(
    <Provider store={ Store }>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));