'use strict';

angular.module('project.services', []).factory('Projects', function () {

  // Might use a resource here that returns a JSON array
  var projectStr = window.localStorage['projects'];
  var projects = [];
  if (projectStr) {
    projects = angular.fromJson(projectStr);
  }

  var save = function save() {
    window.localStorage['projects'] = angular.toJson(projects);
  };
  var contains = function contains(name) {
    for (var n in projects) {
      var project = projects[n];
      if (name === project.name) {
        return n;
      }
    }
    return -1;
  };

  return {
    all: function all() {
      return projects;
    },
    create: function create(newName) {
      if (contains(newName) === -1) {
        // the same name is not allowed
        projects.push({ name: newName });
      }
      save();
    },
    edit: function edit(proj, newName) {
      var i = contains(proj.name);
      if (i != -1) {
        projects[i].name = newName;
      }
      save();
    },
    delete: function _delete(proj) {
      var i = contains(proj.name);
      if (i != -1) {
        projects.splice(i, 1);
      }
      save();
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