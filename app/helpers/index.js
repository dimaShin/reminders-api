function getEnv() {
  return process.env.NODE_ENV || 'development'
}

function getConfig(slice = null) {
  const config = require(`../config/config.${getEnv()}.js`);
  return slice ? config[slice] : config;
}

function getPort() {
  return process.env.PORT || getConfig('server').PORT;
}

module.exports = {
  getEnv,
  getConfig,
  getPort,
};
