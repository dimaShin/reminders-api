const staticServer = require('koa-static');
const path = require('path');

module.exports = staticServer(path.join(__dirname, '../static'));
