const path = require('path')
const Koa = require('koa')
const serve = require('koa-static')
const app = new Koa()
const logger = require('koa-logger') 
const favicon = require('koa-favicon')
const parse = require('koa-bodyparser')
app.use(logger())
app.use(parse())

const port = process.env.PORT || 3000

app.use(serve(path.resolve(__dirname, '..', 'client')))
app.use(favicon(path.join('./client/favicon.ico')));
const userRoutes = require('./routes/users')
app.use(userRoutes.routes())

const taskRoutes = require('./routes/tasks')
app.use(taskRoutes.routes())

app.listen(port)

console.log('App is listening at http://127.0.0.1:3000')