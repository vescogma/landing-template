import io from 'socket.io-client';

import { connect, disconnect, update } from './socketio.actions';

const socket = io('http://localhost:8080');

export function setupSocketIO(dispatch) {
  socket.on('connect', (data) => dispatch(connect(data)));
  socket.on('disconnect', (data) => dispatch(disconnect(data)));
  socket.on('update', (data) => dispatch(update(data)));
}

export function getIPS() {
  socket.emit('ips');
}
