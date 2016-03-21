angular.module('todo.controller', ['ionic'])

.controller('TodoCtrl', function($scope, Todos, Projects, $ionicModal, $ionicSideMenuDelegate) {
  $scope.projects = Projects.all();
  $scope.tasks = Todos.all();
  $scope.selectedProject = null;

  // Projects
  $scope.toggleProjects = () => {
    $ionicSideMenuDelegate.toggleLeft();
  };
  $scope.newProject = () => {
    const projectName = prompt('Project name');
    if (projectName) {
      Projects.create(projectName);
    }
    $ionicSideMenuDelegate.toggleLeft(false);
  };
  $scope.editProject = (proj) => {
    const projectName = prompt('Project name');
    if (projectName) {
      Projects.edit(proj, projectName);
    }
  };
  $scope.deleteProject = (proj) => {
    Projects.delete(proj);
  };
  $scope.selectProject = (proj) => {
    if ($scope.selectedProject === proj) {
      $scope.selectedProject = null;
      $scope.tasks = Todos.all();
    } else {
      $scope.selectedProject = proj;
      $scope.tasks = Todos.search(proj.name);
    }
  };

  // Todos
  // Create and load the Modal
  $ionicModal.fromTemplateUrl('./new-task.html', (modal) => {
    $scope.taskModal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });
  $ionicModal.fromTemplateUrl('./edit-task.html', (modal) => {
    $scope.editTaskModal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });
  $scope.deleteTask = (task) => {
    Todos.delete(task);
  };
  $scope.editTask = (task) => {
    $scope.editTaskModal.show();
    $scope.task = {title: task.title, project: task.project};
    $scope.updateTarget = task;
  };
  $scope.createTask = (task) => {
    Todos.create(task.title, task.project);

    $scope.taskModal.hide();
    $scope.task = null;
  };
  $scope.updateTask = (task) => {
    Todos.edit($scope.updateTarget, task.title, task.project);

    $scope.editTaskModal.hide();
    $scope.updateTarget = null;
    $scope.task = null;
  };
  $scope.newTask = () => {
    $scope.taskModal.show();
  };
  $scope.closeNewTask = () => {
    $scope.taskModal.hide();
  };
  $scope.closeEditTask = () => {
    $scope.editTaskModal.hide();

    $scope.updateTarget = null;
    $scope.task = null;
  };
});
