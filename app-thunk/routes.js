import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AdminContainer from './containers/Admin';
import NotFound from './containers/NotFound';

export default () => (
    <div className="app-wrapper">
      <Switch>
        <Route exact path="/" component={AdminContainer} />
        <Route path="/create" component={NotFound} />
        <Route path="/edit" component={NotFound} />
        <Route path="" component={NotFound} />
      </Switch>
    </div>
  );