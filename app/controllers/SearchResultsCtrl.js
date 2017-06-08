"use strict";

app.controller('SearchResultsCtrl', function($scope, $window, $location){

  $scope.backToSearch = () => {
    $location.path('/search');
  };

  $scope.listPets = () => {
    $scope.results = JSON.parse($window.localStorage.getItem('pets'));
    console.log($scope.results);
  };
  
  $scope.listPets();

});
