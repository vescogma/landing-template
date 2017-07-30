import { SOCKET_CONNECT, SOCKET_DISCONNECT, SOCKET_UPDATE } from './socketio.constants';

export function connect(payload) {
  return {
    type: SOCKET_CONNECT,
    payload,
  };
}

export function update(payload) {
  return {
    type: SOCKET_UPDATE,
    payload,
  };
}

export function disconnect(payload) {
  return {
    type: SOCKET_DISCONNECT,
    payload,
  };
}
