'use strict';

angular.module('todo.controller', ['ionic']).controller('TodoCtrl', function ($scope, Todos, Projects, $ionicModal, $ionicSideMenuDelegate) {
  $scope.projects = Projects.all();
  $scope.tasks = Todos.all();
  $scope.selectedProject = null;

  // Projects
  $scope.toggleProjects = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };
  $scope.newProject = function () {
    var projectName = prompt('Project name');
    if (projectName) {
      Projects.create(projectName);
    }
    $ionicSideMenuDelegate.toggleLeft(false);
  };
  $scope.editProject = function (proj) {
    var projectName = prompt('Project name');
    if (projectName) {
      Projects.edit(proj, projectName);
    }
  };
  $scope.deleteProject = function (proj) {
    Projects.delete(proj);
  };
  $scope.selectProject = function (proj) {
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
  $ionicModal.fromTemplateUrl('./new-task.html', function (modal) {
    $scope.taskModal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });
  $scope.deleteTask = function (task) {
    Todos.delete(task);
  };
  $scope.editTask = function (task) {
    $scope.taskModal.show();
    $scope.task = task; // TODO: this is a new create task
  };
  $scope.createTask = function (task) {
    Todos.create(task.title, task.project);

    $scope.taskModal.hide();
    task.title = '';
  };
  $scope.newTask = function () {
    $scope.taskModal.show();
  };
  $scope.closeNewTask = function () {
    $scope.taskModal.hide();
  };
});