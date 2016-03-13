angular.module('todo.controller', ['ionic']).controller('TodoCtrl', function ($scope, Todos) {
  $scope.tasks = Todos.all();
});