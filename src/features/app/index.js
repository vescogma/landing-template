import React from 'react';
import { connect } from 'react-redux';

import { getNewList } from './app.actions';

const AppComponent = ({ handleClick, ips, last }) => (
  <div>
    <h3>
      IP addresses of current connected users
    </h3>
    {
      ips.length > 0 ? (
        <ul>
          {
            ips.map(ip => (
              <li key={ip.id}>
                <b>id:</b> {ip.id} | <b>ip:</b> {ip.ip}
              </li>
            ))
          }
        </ul>
      ) : null
    }
    {
      last ? (
        <div>
          <h4>Latest User:</h4>
          <div>
            <b>id:</b> {last.id} | <b>ip:</b> {last.ip}
          </div>
        </div>
      ) : null
    }
    <br />
    <button onClick={() => handleClick()}>
      Update List Async
    </button>
  </div>
);

const mapStateToProps = state => ({
  ips: state.app.ips,
  last: state.app.last,
});

const mapDispatchToProps = dispatch => ({
  handleClick: () => dispatch(getNewList()),
});

export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);
