function renderLayout(content) {
  return `<!doctype html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Simple MVC</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.5; background: #fafafa; }
    main { max-width: 680px; margin: 0 auto; background: #fff; padding: 24px; border-radius: 12px; box-shadow: 0 4px 18px rgba(0,0,0,.06); }
    h1 { margin-top: 0; }
    ul { list-style: none; padding: 0; }
    li { padding: 10px 12px; border: 1px solid #e4e4e4; border-radius: 8px; margin-bottom: 10px; }
    .done { color: #2b8a3e; font-weight: bold; }
    .todo { color: #e67700; font-weight: bold; }
    a { color: #1c7ed6; text-decoration: none; }
  </style>
</head>
<body>
  <main>${content}</main>
</body>
</html>`;
}

function renderTodos(todos) {
  const items = todos
    .map((todo) => {
      const statusClass = todo.done ? 'done' : 'todo';
      const statusText = todo.done ? '완료' : '진행중';
      return `<li><strong>${todo.title}</strong><br /><span class="${statusClass}">${statusText}</span></li>`;
    })
    .join('');

  return renderLayout(`
    <h1>간단한 MVC Todo 예제</h1>
    <p>Model, View, Controller를 분리한 기본 구조입니다.</p>
    <ul>${items}</ul>
    <p><a href="/api/todos">JSON API 보기</a></p>
  `);
}

module.exports = {
  renderTodos
};
