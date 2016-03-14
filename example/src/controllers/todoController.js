angular.module('todo.controller', ['ionic'])

.controller('TodoCtrl', function($scope, Todos, $ionicModal) {
  $scope.tasks = Todos.all();

  // Create and load the Modal
  $ionicModal.fromTemplateUrl('./new-task.html', (modal) => {
    $scope.taskModal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });


  $scope.createTask = function(task) {
    Todos.create(task.title);

    $scope.taskModal.hide();
    task.title = "";
  };

  $scope.newTask = () => {
    $scope.taskModal.show();
  };
  $scope.closeNewTask = () => {
    $scope.taskModal.hide();
  };
})
