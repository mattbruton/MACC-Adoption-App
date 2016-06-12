"use strict";

app.controller("SearchCtrl", function($scope, PetfinderRequest, $location) {

  $scope.petfinderReturn = [];
  $scope.dogs = [];
  $scope.cats = [];
  $scope.other = [];

  $scope.sortPets = function() {
      $scope.petfinderReturn.forEach(function(pet) {
        if (pet.animal.$t === "Dog") {
          $scope.dogs.push(pet);   
        } else if (pet.animal.$t === "Cat") {
          $scope.cats.push(pet);
        } else {
          $scope.other.push(pet);
        }
      });
    console.log($scope.dogs);
    console.log($scope.cats);
    console.log($scope.other);
  };

  $scope.findPets = function() {
    PetfinderRequest.getPetsFromPetfinder($scope.petfinderReturn)
      .then(function() {
      })
      .then(function() {
        $scope.sortPets();
      })
  };

  $scope.findPets();
  
});
