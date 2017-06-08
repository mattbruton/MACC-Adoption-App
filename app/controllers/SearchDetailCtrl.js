"use strict";

app.controller("SearchDetailCtrl", function ($scope, $window, $routeParams) {

  $scope.loadPet = () => {
    return new Promise((resolve, reject) => {
      let pets = JSON.parse($window.localStorage.getItem('pets')).filter((pet) => {
        return pet.id.$t == $routeParams.id;
      });
      resolve(pets[0]);
    });
  };

  $scope.loadPet().then((pet) => {
    $scope.pet = pet;
    $scope.$apply();
  });
});