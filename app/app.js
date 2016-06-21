"use strict";

var app = angular.module('MaccAdopt', ['ngRoute', 'ui.materialize'])
  .constant("firebaseURL", `https://nss-matt-fe-capstone.firebaseio.com/`);

  let isAuth = (AuthFactory) => new Promise ((resolve, reject) => {
  if(AuthFactory.isAuthenticated()){
    console.log("User is authenticated, resolve route promise");
    resolve();
  } else {
    console.log("User is not authenticated, reject route promise");
    reject();
  }
});

app.config(function($routeProvider){
  $routeProvider.
    when('/',{
      templateUrl: 'partials/carousel.html',
      controller: 'CarouselCtrl'
      }).
    when('/details/:id',{
      templateUrl: 'partials/details.html',
      controller: 'SearchCtrl'
      }).
    when('/search',{
      templateUrl: 'partials/search.html',
      controller: 'SearchCtrl'
      }).
    when('/favorites',{
      templateUrl: 'partials/favorites.html',
      controller: 'FavCtrl'
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