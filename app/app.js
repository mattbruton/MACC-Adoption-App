"use strict";

var app = angular.module('MaccAdopt', ['ngRoute', 'ui.materialize'])
  .constant("firebaseURL", `https://nss-matt-fe-capstone.firebaseio.com/`);

app.config(function($routeProvider){
  $routeProvider.
    when('/',{
      templateUrl: 'partials/search.html',
      controller: 'SearchCtrl'
      }).
    when('/login',{
      templateUrl: 'partials/login.html',
      controller: 'LoginCtrl'
      }).
      otherwise('/');
});