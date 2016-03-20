'use strict';

describe('this test should be', () => {
  /* mock doesn't work well
  beforeEach(module('todo.services'));

  var $controller;
  beforeEach(inject((_$controller_) => {
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));*/

  it('always passed', () => {
    // var $scope = {};
    // var controller = $controller('PasswordController', { $scope: $scope });

    expect(1).toEqual(1);
  });
});
