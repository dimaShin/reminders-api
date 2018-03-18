const Koa = require("koa");
const mount = require('koa-mount');
const router = require('./router');
const staticServer = require('./staticServer');
const { getPort } = require('./helpers');

const app = new Koa();

app.use(mount('/static', staticServer));
app.use(mount('/api', router.routes()));

module.exports = app.listen(getPort()).on("error", err => {
  console.error(err);
});