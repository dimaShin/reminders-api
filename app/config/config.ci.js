const defaults = require('./config.default');

module.exports = {
  ...defaults,
  server: { PORT: 3001 },
  db: {
    ...defaults.db,
    PORT: 5432,
  }
};