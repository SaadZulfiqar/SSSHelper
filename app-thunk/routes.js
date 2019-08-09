import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Test from './containers/test';
import NotFound from './containers/NotFound';

export default () => (
    <div className="app-wrapper">
      <Switch>
        <Route exact path="/" component={Test} />
        <Route path="/features" component={Test} />
        <Route path="" component={NotFound} />
      </Switch>
    </div>
  );