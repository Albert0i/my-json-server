require('dotenv').config()
const jsonServer = require('json-server')
const server = jsonServer.create()
const path = require('path')
const router = jsonServer.router(path.join(__dirname, 'data', 'db.json'))
const middlewares = jsonServer.defaults()
const PORT = process.env.PORT || 3000

server.use(middlewares)
server.use(router)
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`)
})

/*
   JSON Server
   https://github.com/typicode/json-server#access-from-anywhere
*/