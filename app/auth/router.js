const Router = require("koa-router");
const router = new Router();
const authController = require('./auth.controller');


router.post("/signin", authController.signin);

module.exports = router;