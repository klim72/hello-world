const http = require('http');
const { listPage, listApi } = require('./controllers/todoController');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    return listPage(req, res);
  }

  if (req.method === 'GET' && req.url === '/api/todos') {
    return listApi(req, res);
  }

  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('404 Not Found');
});

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`MVC app running at http://localhost:${port}`);
});
