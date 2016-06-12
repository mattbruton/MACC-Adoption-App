"use strict";

app.controller("SearchCtrl", function($scope, PetfinderRequest, $location) {

  $scope.petfinderReturn = [];
  $scope.dogs = [];
  $scope.cats = [];
  $scope.other = [];

  $scope.isSearching = true;
  $scope.showDogs = false;
  $scope.showCats = false;
  $scope.showOther = false;

  $scope.select = {
            value: "",
            choices: ["Dogs", "Cats", "Other"]
        };

  $scope.sizes = {
            value: "",
            choices: ["Small", "Medium", "Large"]
        };

  $scope.ages = {
            value: "",
            choices: ["Baby","Young", "Adult", "Senior"]
        };

  $scope.genders = {
            value: "",
            choices: ["Male", "Female"]
        };


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
        $scope.sortPets();
      })
  };

  $scope.findPets();

});
