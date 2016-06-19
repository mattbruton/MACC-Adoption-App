"use strict";

var app = angular.module('MaccAdopt', ['ngRoute', 'ui.materialize', 'angularSimpleSlider'])
  .constant("firebaseURL", `https://nss-matt-fe-capstone.firebaseio.com/`);

// app.config(['slickCarouselConfig', function (slickCarouselConfig) {
//     slickCarouselConfig.dots = true;
//     slickCarouselConfig.autoplay = false;
//   }])

app.config(function($routeProvider){
  $routeProvider.
    when('/',{
      templateUrl: 'partials/carousel.html',
      controller: 'CarouselCtrl'
      }).
    when('/search',{
      templateUrl: 'partials/search.html',
      controller: 'SearchCtrl'
      }).
    when('/login',{
      templateUrl: 'partials/login.html',
      controller: 'LoginCtrl'
      }).
    when('/logout',{
      templateUrl: 'partials/login.html',
      controller: 'LoginCtrl'
      }).
      otherwise('/');
});