function getIpList(current = null, connections = [], connect = false) {
  // on connection event, current is the latest socket, otherwaise has to be calculated
  let latest = connect ? {
    id: current.id,
    ip: current.conn.remoteAddress === '::1' ? 'localhost' : current.conn.remoteAddress,
    timestamp: current.handshake.issued,
  } : {
    timestamp: 0,
  };

  const ips = [];

  // add each connection to the array except for current socket
  connections.forEach(({ socket }) => {
    if (!current || (current && socket.id !== current.id)) {
      const ipObject = {
        id: socket.id,
        ip: socket.conn.remoteAddress === '::1' ? 'localhost' : socket.conn.remoteAddress,
        timestamp: socket.handshake.issued,
      };

      ips.push(ipObject);

      // do not set latest if it was a connection event
      if (!connect && ipObject.timestamp > latest.timestamp) {
        latest = Object.assign({}, ipObject, { index: ips.length - 1 });
      }
    }
  });

  // if not a connection event, remove latest from ip list
  if (!connect && latest.id) {
    ips.splice(latest.index, 1);
  }

  return { ips, last: latest.id ? latest : null };
}

module.exports = { getIpList };
