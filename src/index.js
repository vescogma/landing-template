import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';

import { getConfiguredStore } from './config/create-store';
import { App } from './features/app';

const history = createHistory();
const store = getConfiguredStore(history);

const Root = () => (
  <Provider store={store}>
    <App></App>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
