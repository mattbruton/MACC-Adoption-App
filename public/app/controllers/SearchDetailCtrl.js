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
    $scope.pet.fbUrl = `https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fpeaceful-refuge-13916.herokuapp.com%2Fpets%2F${$scope.pet.id.$t}&amp;src=sdkpreparse`;
    $scope.$apply();
  });
}]);