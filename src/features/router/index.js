import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { App } from '../app';
import { About } from '../about';
import { NotFound } from '../not-found';

const SetStatus = ({ status, children }) => (
  <Route render={({ staticContext }) => {
    if (staticContext) {
      staticContext.status = 404;
    }
    return children;
  }} />
);

export const Router = () => (
  <Switch>
    <Route exact path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="/500" render={() => <NotFound status={500} />} />
    <SetStatus status={404}>
      <NotFound status={404} />
    </SetStatus>
  </Switch>
);