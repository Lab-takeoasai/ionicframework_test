angular.module('todo.controller', ['ionic'])

.controller('TodoCtrl', function($scope, Todos, Projects, $ionicModal, $ionicSideMenuDelegate) {
  $scope.projects = Projects.all();
  $scope.tasks = Todos.all();

  // Projects
  $scope.toggleProjects = () => {
    $ionicSideMenuDelegate.toggleLeft(!$ionicSideMenuDelegate.isOpenLeft());
  };
  $scope.newProject = () => {
    const projectName = prompt('Project name');
    if (projectName) {
      // Projects.create(projectName);
    }
    $ionicSideMenuDelegate.toggleLeft(false);
  };

  // Todos
  // Create and load the Modal
  $ionicModal.fromTemplateUrl('./new-task.html', (modal) => {
    $scope.taskModal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });
  $scope.createTask = (task) => {
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
});
