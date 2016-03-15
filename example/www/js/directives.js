'use strict';

angular.module('sample.directive', []).directive('firstDirective', function () {
  return {
    template: '<span>初めてのディレクティブ</span>'
  };
});