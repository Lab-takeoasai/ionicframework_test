angular.module('todo', ['ionic']).controller('TodoCtrl', function ($scope) {
  $scope.tasks = [{ title: 'Collect coins' }, { title: 'Eat mushrooms' }, { title: 'Get higeeeh enough to grab the flag' }, { title: '日本語 the Princess' }];
});