class TodoModel {
  constructor() {
    this.todos = [
      { id: 1, title: 'MVC 프로젝트 구조 만들기', done: true },
      { id: 2, title: '라우팅 연결하기', done: true },
      { id: 3, title: '뷰 템플릿 렌더링하기', done: false }
    ];
  }

  getAll() {
    return this.todos;
  }
}

module.exports = new TodoModel();
