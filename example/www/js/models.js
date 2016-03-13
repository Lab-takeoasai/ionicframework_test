'use strict';

angular.module('todo.services', []).factory('Todos', function () {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var todos = [{ title: 'Collect coins' }, { title: 'Eat mushrooms' }, { title: 'Get higeeeh enough to grab the flag' }, { title: '日本e語 the Princess' }];

  return {
    all: function all() {
      return todos;
    }
  };
});