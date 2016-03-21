angular.module('todo.services', [])

.factory('Todos', function() {
  // Might use a resource here that returns a JSON array

  const todoStr = window.localStorage['todos'];
  let todos = [];
  if (todoStr) {
    todos = angular.fromJson(todoStr);
  }

  function save() {
    window.localStorage['todos'] = angular.toJson(todos);
  };

  return {
    search: (name) => {
      return todos.filter((item, index) => {
        return item.project === name;
      });
    },
    all: () => {
      return todos;
    },
    delete: (todo) => {
      const i = todos.indexOf(todo);
      if (i !== -1) {
        todos.splice(i, 1);
      }
      save();
    },
    create: (str, proj) => {
      todos.push({title: str, project: proj});
      save();
    },
    edit: (todo, str, proj) => {
      const i = todos.indexOf(todo);
      if (i !== -1) {
        todos[i].title = str;
        todos[i].project = proj;
      }
      save();
    }
  };
});
