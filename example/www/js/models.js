'use strict';

angular.module('project.services', []).factory('Projects', function () {

  // Might use a resource here that returns a JSON array
  var projectStr = window.localStorage['projects'];
  var projects = [];
  if (projectStr) {
    projects = angular.fromJson(projectStr);
  }

  return {
    all: function all() {
      return projects;
    },
    create: function create(t) {
      projects.push({ name: t, tasks: [] });
      window.localStorage['projects'] = angular.toJson(projects);
    }

  };
});
'use strict';

angular.module('todo.services', []).factory('Todos', function () {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var todos = [{ title: 'Collect coins', project: 'test' }, { title: 'Eat mushrooms', project: 'test' }, { title: 'Get higeeeh enough to grab the flag', project: 'test' }, { title: '日本語 the Princess', project: 'test' }];

  return {
    all: function all() {
      return todos;
    },
    create: function create(str, proj) {
      todos.push({ title: str, project: proj });
    }
  };
});