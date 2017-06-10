"use strict";

var app = angular.module('MaccAdopt', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.
  when('/', {
    templateUrl: 'partials/search/search-form.html',
    controller: 'SearchFormCtrl'
  }).
  when('/search/results', {
    templateUrl: 'partials/search/result-list.html',
    controller: 'SearchResultsCtrl'
  }).
  when('/pets/:id', {
    templateUrl: 'partials/search/result-detail.html',
    controller: 'SearchDetailCtrl'
  }).
  otherwise('/');
  
  $locationProvider.html5Mode(true);
}]);
