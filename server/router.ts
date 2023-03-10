const Router = require('koa-router');
const router = new Router();
const logs = require('./controllers/logs');
const food = require('./controllers/foodDB');

router.get('/log', logs.getLogs);
router.get("/log/edit/:id", logs.getLog);
router.delete("/log/edit/:id", logs.deleteLog);
router.put("/log/edit/:id", logs.editLog);
router.post('/add', logs.postLog);

router.get('/db', food.getDataBase);


export default router;