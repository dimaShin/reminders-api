const Memcached = require('memcached');
const { getConfig } = require('../helpers');
const config = getConfig('memcached');

module.exports = class SessionService {

  constructor() {
    this.sessionTime = 10;
  }

  connect() {
    const memcaheLocation = `${config.host}:${config.port}`;
    this.connection = new Memcached(memcaheLocation, {});
  }

  extendSession(id, time = this.sessionTime) {
    console.log(('time: ', time));
    return new Promise((resolve, reject) => {
      this.connection.touch(id, time, function (err, touched) {
        console.log('touch:', err, touched)
        if (err || !touched) {
          reject(err);
        } else {
          resolve(touched);
        }
      });
    });
  }

  getSession(id) {
    return new Promise((resolve, reject) => {
      this.connection.get(id, (err, value) => {
        if (err || !value) {
          reject(err || new Error('no active session for this token'));
        } else {
          resolve(value);
        }
      })
    })
  }

  createSession(id) {
    return new Promise((resolve, reject) => {
      this.connection.set(id, true, this.sessionTime, function (err) {
        if (err) {
          reject(err);
        } else {
          resolve(id);
        }
      });
    })
  }
};
