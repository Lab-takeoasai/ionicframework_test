'use strict';

angular.module('sample.directive', []).directive('firstDirective', function () {
  return {
    template: '<span>初めてのディレクティブ</span>'
  };
});
'use strict';

angular.module('taskEdit.directive', []).directive('taskEdit', function () {
  return {
    templateUrl: '../_task.html'
  };
});