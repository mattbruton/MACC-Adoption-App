"use strict";

var app = angular.module('MaccAdopt', ['ngRoute', 'ngCookies']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.
  when('/', {
    templateUrl: 'partials/main.html'
  }).
  when('/services', {
    templateUrl: 'partials/info/info-services.html',
    controller: 'ServicesCtrl'
  }).
  when('/search', {
    templateUrl: 'partials/search/search-form.html',
    controller: 'SearchCtrl'
  }).
  otherwise('/');
  
  $locationProvider.html5Mode(true);
});
