angular.module('todo.services', [])

.factory('Todos', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  let todos = [
    { title: 'Collect coins', project: 'test' },
    { title: 'Eat mushrooms', project: 'test' },
    { title: 'Get higeeeh enough to grab the flag', project: 'test' },
    { title: '日本語 the Princess', project: 'test' }
  ];

  const save = () => {

  };

  return {
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
      todos.push({title: str, project: proj})
      save();
    }
  };
});
