'use strict';

angular.module('todo.controller', ['ionic']).controller('TodoCtrl', function ($scope, Todos, Projects, $ionicModal, $ionicSideMenuDelegate) {
  $scope.projects = Projects.all();
  $scope.tasks = Todos.all();

  // Projects
  $scope.toggleProjects = function () {
    $ionicSideMenuDelegate.toggleLeft(!$ionicSideMenuDelegate.isOpenLeft());
  };
  $scope.newProject = function () {
    var projectName = prompt('Project name');
    if (projectName) {
      // Projects.create(projectName);
    }
    $ionicSideMenuDelegate.toggleLeft(false);
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
    Todos.create(task.title);

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