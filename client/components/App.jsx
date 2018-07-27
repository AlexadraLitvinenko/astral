import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import GridContainer from '../containers/GridContainer';
import NotFound from './NotFound';
import SingleContainer from '../containers/SingleContainer'; 
import DevTools from 'mobx-react-devtools';

import '../styles/App.css';

const App = () => (
    <div>
        <DevTools />
        <Switch>
            <Route path='/' exact render={ () => <Redirect to='/Books' /> } />
            <Route path='/Books' component={ GridContainer } /> 
            <Route path='/Book/:id' component={ SingleContainer } />
            <Route component={ NotFound } />
        </Switch>
    </div>
);        

export default App;