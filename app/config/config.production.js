const defaults = require('./config.default');

module.exports = { ...defaults , staticOptions: { maxage: 10e10 } };