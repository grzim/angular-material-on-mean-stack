'use strict';

/**
 * @ngdoc function
 * @name expressNotesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the expressNotesApp
 */
angular.module('expressNotesApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
