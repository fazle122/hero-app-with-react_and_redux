import React from 'react';
import {Route} from 'react-router-dom';
import App from './App';
import Dashboard from './component/Dashboard/Dashboard';
import Heroes from './component/Heroes/Heroes';

export default(
    <Route path="/" component={App}>
        <Route exact component={Dashboard}/>
        <Route path="Heroes" component={Heroes} />
    </Route>
        
);
