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

  return {
    all: () => {
      return todos;
    },
    create: (str, proj) => {
      todos.push({title: str, project: proj})
    }
  };
});
