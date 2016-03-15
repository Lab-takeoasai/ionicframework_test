angular.module('project.services', [])

.factory('Projects', function() {

  // Might use a resource here that returns a JSON array
  const projectStr = window.localStorage['projects'];
  let projects = [];
  if (projectStr) {
    projects = angular.fromJson(projectStr);
  }

  const save = () => {
    window.localStorage['projects'] = angular.toJson(projects);
  };
  const contains = (name) => {
    for (let n in projects) {
      const project = projects[n];
      if (name === project.name) {
        return n;
      }
    }
    return -1;
  };

  return {
    all: () => {
      return projects;
    },
    create: (newName) => {
      if (contains(newName) === -1) { // the same name is not allowed
        projects.push({name: newName})
      }
      save();
    },
    edit: (proj, newName) => {
      const i = contains(proj.name);
      if (i != -1) {
        projects[i].name = newName;
      }
      save();
    },
    delete: (proj) => {
      const i = contains(proj.name);
      if (i != -1) {
        projects.splice(i, 1);
      }
      save();
    }

  };
});
