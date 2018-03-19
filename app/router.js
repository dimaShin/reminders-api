const Router = require("koa-router");
const router = new Router();
const notiController = require('./controllers/notifications.controller');

router.get("/notifications", notiController.get);

router.post("/notifications", notiController.create);

module.exports = router;