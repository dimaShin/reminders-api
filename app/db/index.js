const Sequelize = require('sequelize');
const { getConfig } = require('../helpers');
const modelsConstructor = require('./models');

const dbConf = getConfig('db');
const db = new Sequelize(dbConf);

modelsConstructor.init(db);

async function init() {
  try {
    await db.authenticate();
    await db.sync({ force: dbConf.sync.force });
    console.log('Postrges connection has been established successfully with sync', dbConf.sync.force);
  } catch (err) {
    console.error('Unable to connect to the postgres:', err.code);
  }
}

module.exports = {
  init: init,
  db,
};