const Koa = require("koa");
const mount = require('koa-mount');
const body     = require('koa-body');
const compress = require('koa-compress');
const session  = require('koa-session');

const router = require('./router');
const staticServer = require('./staticServer');
const { getPort } = require('./helpers');
const notificationService = require('./notifications-queue');
const dbService = require('./db');

const app = new Koa();

notificationService.rq.connect();
dbService.init();

app.use(async function responseTime(ctx, next) {
  const t1 = Date.now();
  await next();
  ctx.set('X-Response-Time', Math.ceil(Date.now()-t1)+'ms');
});

app.use(compress({}));

app.use(body({ multipart: true }));

app.keys = ['reminder-api-application'];
app.use(session(app));

app.use(mount('/static', staticServer));
app.use(mount('/api', router.routes()));

module.exports = app.listen(getPort()).on("error", err => {
  console.error(err);
});