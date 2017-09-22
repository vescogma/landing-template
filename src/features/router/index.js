import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { App } from '../app';
import { About } from '../about';
import { NotFound } from '../not-found';

const RedirectWithStatus = ({ from, to, status }) => (
  <Route render={({ staticContext }) => {
    if (staticContext) {
      staticContext.status = status;
    }
    return <Redirect from={from} to={to}/>
  }}/>
);

export const Router = () => (
  <Switch>
    <Route exact path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="/404" component={NotFound} />
    <RedirectWithStatus
      status={404}
      from="*"
      to="/404"
    />
  </Switch>
);