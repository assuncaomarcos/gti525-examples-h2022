const jsonServer = require('json-server');
const path = require('path');

const port = process.env.NODE_PORT || 3000;
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.listen(port, () => {
    console.log('JSON Server écoute le port ' + port);
})