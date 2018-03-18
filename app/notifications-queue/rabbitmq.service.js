const amqp = require('amqplib/callback_api');
const { getConfig } = require('../helpers');

module.exports = {
  connect() {
    const { host } = getConfig('amqp');
    return amqp.connect(host, function(err, conn) {
      if (err) {
        console.error('Fail to connect rabbitMQ service', err.code);
      } else {
        console.log('rabbitmq connection established');
      }
    });
  }
};
