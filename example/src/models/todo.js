angular.module('todo.services', [])

.factory('Todos', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  let todos = [
    { title: 'Collect coins' },
    { title: 'Eat mushrooms' },
    { title: 'Get higeeeh enough to grab the flag' },
    { title: '日本e語 the Princess' }
  ];

  return {
    all: () => {
      return todos;
    },
    create: () => {
      todos.push({title: 'new task'})
    }
  };
});
