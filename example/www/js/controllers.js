'use strict';

angular.module('todo.controller', ['ionic']).controller('TodoCtrl', function ($scope, Todos) {
  $scope.tasks = Todos.all();
  $scope.newTask = function () {
    Todos.create();
  };
});