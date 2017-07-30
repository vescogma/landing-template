import { SOCKET_UPDATE } from '../../global/socketio/socketio.constants';

const INITIAL_STATE = {
  ips: [],
  last: null,
};

export const appReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case SOCKET_UPDATE:
      return Object.assign({}, state, {
        ips: action.payload.ips,
        last: action.payload.last ? action.payload.last : null,
      });
    default:
      return state;
  }
};
