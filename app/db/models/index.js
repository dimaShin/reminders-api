const fs = require('fs');
const customTypes = require('../data-types');

module.exports = {
  init(db) {
    customTypes.initDataTypes();

    loadModels()
      .map(fileName => require(`./${fileName}`)(db))
      .forEach((callback = () => {}) => {
        callback(db.models)
      });
  }
};

function loadModels() {
  return fs.readdirSync(__dirname)
    .filter(fileName => fileName !== 'index.js')
}
