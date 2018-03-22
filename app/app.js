const Koa = require("koa");
const mount = require('koa-mount');
const body     = require('koa-body');
const compress = require('koa-compress');

const router = require('./router');
const authModule = require('./auth/router');
const auth0 = require('./auth0');
const staticServer = require('./staticServer');
const { getPort } = require('./helpers');
const notificationService = require('./notifications-queue');
const dbService = require('./db');
const SessionService = require('./auth/sessions');
const SocketSerivce = require('./sockets/sockets.service');

const app = new Koa();
const sessionStorage = new SessionService();
const socketService = new SocketSerivce(app);

notificationService.rq.connect();
dbService.init();

async function testMemcache() {
  const sessionId = Math.ceil(Math.random() * 10e3);
  try {
    sessionStorage.connect();
    const upadatedSession = await sessionStorage.extendSession(sessionId);
    const gettedSession = await sessionStorage.getSession(sessionId);
    console.log('upadatedSession',  upadatedSession);
    console.log('gettedSession',  gettedSession);
  } catch(err) {
    console.error('catch: ', err);
    const createdSession = await sessionStorage.createSession(sessionId);
    const newSession = await sessionStorage.getSession(sessionId);
    console.log('createdSession',  createdSession);
    console.log('newSession',  newSession);
    const upadatedSession = await sessionStorage.extendSession(sessionId);
    console.log('upadatedSession',  upadatedSession);

  }

}
setTimeout(() => testMemcache(), 1500)
testMemcache();

app.use(async function responseTime(ctx, next) {
  const t1 = Date.now();
  await next();
  ctx.set('X-Response-Time', Math.ceil(Date.now()-t1)+'ms');
});

app.use(compress({}));

app.use(body({ multipart: true }));

app.use(auth0);

app.use(mount('/auth', authModule.routes()));
app.use(mount('/static', staticServer));
app.use(mount('/api', router.routes()));

module.exports = app.listen(getPort()).on("error", err => {
  console.error(err);
});