angular.module('project.services', [])

.factory('Projects', function() {

  // Might use a resource here that returns a JSON array
  const projectStr = window.localStorage['projects'];
  let projects = [];
  if (projectStr) {
    projects = angular.fromJson(projectStr);
  }

  return {
    all: () => {
      return projects;
    },
    create: (t) => {
      projects.push({name: t})
      window.localStorage['projects'] = angular.toJson(projects);
    },
    delete: (t) => {
      const i = projects.indexOf(t);
      if (i != -1) {
        projects.splice(i, 1);
      }
    }

  };
});
