"use strict";

app.controller("SearchDetailCtrl",['$scope', '$routeParams', 'PetFactory', function ($scope, $routeParams, PetFactory) {

  $scope.loadPet = () => {
    return new Promise((resolve, reject) => {
      resolve(PetFactory.getSinglePetFromPetfinder($routeParams.id));
    });
  };

  $scope.formatDate = (date) => {
    return new Date(date).toLocaleDateString(); 
  };

  $scope.loadPet().then((pet) => {
    $scope.pet = pet;
    $scope.$apply();
  });
}]);