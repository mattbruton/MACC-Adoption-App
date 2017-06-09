"use strict";

app.controller('SearchResultsCtrl', ['$scope', '$window', '$location', function ($scope, $window, $location) {

  $scope.backToSearch = () => {
    $location.path('/search');
  };

  $scope.listPets = () => {
    $scope.results = JSON.parse($window.localStorage.getItem('pets'));
  };

  $scope.listPets();
}]);
