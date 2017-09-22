import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { getConfiguredStore } from './config/create-store';
import { Router } from './features/router';

const history = createHistory();
const store = getConfiguredStore(history);

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
