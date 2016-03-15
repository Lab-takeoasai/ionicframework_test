'use strict';

angular.module('todo.controller', ['ionic']).controller('TodoCtrl', function ($scope, Todos, Projects, $ionicModal, $ionicSideMenuDelegate) {
  $scope.projects = Projects.all();
  $scope.tasks = Todos.all();

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
    console.log(proj);
  };
  $scope.deleteProject = function (proj) {
    console.log(proj);
    Projects.delete(proj); // TODO: animation
  };

  // Todos
  // Create and load the Modal
  $ionicModal.fromTemplateUrl('./new-task.html', function (modal) {
    $scope.taskModal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });
  $scope.createTask = function (task) {
    Todos.create(task.title, task.project);

    $scope.taskModal.hide();
    task.title = "";
  };
  $scope.newTask = function () {
    $scope.taskModal.show();
  };
  $scope.closeNewTask = function () {
    $scope.taskModal.hide();
  };
});