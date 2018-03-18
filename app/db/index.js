const Sequelize = require('sequelize');
const { getConfig } = require('../helpers');
const models = require('./models');
const dbConf = getConfig('db');

async function connect() {
  const connection = new Sequelize(dbConf);

  await connection
    .authenticate()
    .then(() => {
      console.log('Postrges connection has been established successfully with sync', dbConf.sync.force);
    })
    .catch(err => {
      console.error('Unable to connect to the postgres:', err);
    });

  console.log('models: ', models);

  models.forEach(model => {
    connection.define(model.name, model.define);
  });

  models.forEach(({ associate, name }) => {
    if (associate) {
      console.log('creating association for: ', name, connection.models)
      associate(connection.models)
    }
  });

  return connection
    .sync({ force: dbConf.sync.force })
    .then(() => {
      models.forEach(async ({ afterCreate }) => {
        if (afterCreate) {
          await afterCreate(connection)
        }
      });

      return connection;
    });
}

module.exports = {
  connect,
};