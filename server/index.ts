const Koa = require('koa');
const app = new Koa();
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
import router from './router';
const PORT = 4000;

app.use(cors());
app.use(bodyParser());
app.use(router.routes());


app.listen(PORT, () => { console.log(`Server listening to http://localhost:${PORT}`); });
