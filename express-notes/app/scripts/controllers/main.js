'use strict';

/**
 * @ngdoc function
 * @name expressNotesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the expressNotesApp
 */
angular.module('expressNotesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
