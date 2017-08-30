'use strict';

// Declare app level module which depends on views, and components
angular.module('peopleoftheUSCapital', [
  'ngRoute',
  'repList'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/reps'});
}]);
