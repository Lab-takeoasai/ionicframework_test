'use strict';

angular.module('project.services', []).factory('Projects', function () {

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

  var todoStr = window.localStorage['todos'];
  var todos = [];
  if (todoStr) {
    todos = angular.fromJson(todoStr);
  }

  function save() {
    window.localStorage['todos'] = angular.toJson(todos);
  };

  return {
    search: function search(name) {
      return todos.filter(function (item, index) {
        return item.project === name;
      });
    },
    all: function all() {
      return todos;
    },
    delete: function _delete(todo) {
      var i = todos.indexOf(todo);
      if (i !== -1) {
        todos.splice(i, 1);
      }
      save();
    },
    create: function create(str, proj) {
      todos.push({ title: str, project: proj });
      save();
    },
    edit: function edit(todo, str, proj) {
      var i = todos.indexOf(todo);
      if (i !== -1) {
        todos[i].title = str;
        todos[i].project = proj;
      }
      save();
    }
  };
});