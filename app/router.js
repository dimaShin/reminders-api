const Router = require("koa-router");
const router = new Router();
const notiController = require('./controllers/notifications.controller');
const authController = require('./auth/auth.controller');

router.get("/notifications", notiController.get);
router.post("/notifications", notiController.create);

router.post("/auth/signin", authController.signin);

module.exports = router;