const socketIO = require('socket.io');

module.exports = class SocketsService {
  constructor(app) {
    this.sockets = {};
    this.io = socketIO(app);

    this.io.on('connection', function (socket) {
      this.sockets[socket.requestId] = socket;
    });
  }

  finishRequest(requestId, data) {
    const socket = this.sockets[requestId];
    if (socket) {
      socket.emit('finish', data);
    }
  }
};
