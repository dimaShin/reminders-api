const Router = require("koa-router");
const router = new Router();
const docsController = require('./controllers/docs/docs.controller');

/**
 * @api {get} / Request Api Documentation
 * @apiName GetDocs
 * @apiGroup HTML
 *
 * @apiSuccess {HTML} body documentation page.
 */
router.get("/", docsController.get);

router.get('*', ctx => console.log(ctx));

module.exports = router;