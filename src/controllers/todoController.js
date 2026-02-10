const todoModel = require('../models/todoModel');
const { renderTodos } = require('../views/todoView');

function listPage(req, res) {
  const todos = todoModel.getAll();
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(renderTodos(todos));
}

function listApi(req, res) {
  const todos = todoModel.getAll();
  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify({ data: todos }, null, 2));
}

module.exports = {
  listPage,
  listApi
};
