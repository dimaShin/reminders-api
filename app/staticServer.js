const staticServer = require('koa-static');
const path = require('path');
const helpers = require('./helpers');

console.log(__dirname);

module.exports = staticServer(path.join(__dirname, '../static'));
