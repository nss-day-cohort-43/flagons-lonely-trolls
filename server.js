const jsonServer = require('json-server')
const path = require('path')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'api/database.json'))
const middleware = jsonServer.defaults({
  static: __dirname
})
const port = process.env.PORT || 8080

server.use(middleware)
server.use(router)
server.listen(port, () => {
  console.log(`JSON Server running on port ${port}`)
})