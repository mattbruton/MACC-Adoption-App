"use strict";

app.controller("SearchCtrl", function($scope, PetfinderRequest, $location, $routeParams, $rootScope) {

  /* Unfortunately, Petfinder's API will not let me query specific animal types when selecting a specific
     shelter. The workaround is uglier than I would like, but I have to pull all animals and then have them
     sorted based on type, then filter further based on the user's choices. */



  $scope.petfinderReturn = [];

  $scope.animalsToDisplay = [];

  $rootScope.selectedPet = [];

  $scope.showPets = false;

  $scope.isSearching = true;

  $scope.petSelected = false;

  $scope.select = {
            value: "",
            choices: ["Dog", "Cat", "Small & Furry"]
        };

  $scope.sizes = {
            value: "",
            choices: ["S", "M", "L"]
        };

  $scope.ages = {
            value: "",
            choices: ["Baby","Young", "Adult", "Senior"]
        };

  $scope.sexes = {
            value: "",
            choices: ["M", "F"]
        };


  $scope.displayPets = function() {
    $scope.animalsToDisplay = [];
    $scope.petfinderReturn.forEach(function(pet) {
      if (pet.animal.$t === $scope.select.value && pet.status.$t === "A") {
        $scope.animalsToDisplay.push(pet);

        console.log($scope.animalsToDisplay);
        if ($scope.ages.value !== "") {
        $scope.filterByAge();
        }
        if ($scope.sexes.value !== "") {
        $scope.filterBySex();
        }
        if ($scope.sizes.value !== "") {
        $scope.filterBySize();
        }
      }
      $scope.isSearching = false;
      $scope.showPets = true;
    });

  };

  $scope.selectPet = function(id) {
    $scope.animalsToDisplay.forEach(function(pet) {
      if (pet.shelterPetId.$t === id) {
        $rootScope.selectedPet = [];
        $rootScope.selectedPet.push(pet);
        $scope.petSelected = true;
        $scope.showPets = false;
        $scope.isSearching = false;
        console.log($rootScope.selectedPet)
        // .then(function () {
        //         $location.url("/details/pet.shelterPetId.$t");
        //       })
      }
    })
  }

  $scope.filterByAge = function() {
    $scope.animalsToDisplay.forEach(function(pet) {
      if (pet.age.$t !== $scope.ages.value) {
        $scope.animalsToDisplay.pop(pet);
        console.log($scope.animalsToDisplay);
      }
    })
  }

  $scope.filterBySex = function() {
    $scope.animalsToDisplay.forEach(function(pet) {
      if (pet.sex.$t !== $scope.sexes.value) {
        $scope.animalsToDisplay.pop(pet);
        console.log($scope.animalsToDisplay);
      }
    })
  }

  $scope.filterBySize = function() {
    $scope.animalsToDisplay.forEach(function(pet) {
      if (pet.size.$t !== $scope.sizes.value) {
        $scope.animalsToDisplay.pop(pet);
        console.log($scope.animalsToDisplay);
      }
    })
  }

  $scope.returnToSearchView = function() {
    $scope.isSearching = true;
    $scope.showPets = false;
  }

  $scope.returnToResults = function() {
    $scope.isSearching = false;
    $scope.petSelected = false;
    $scope.showPets = true;
  }

  $scope.findPets = function() {
    PetfinderRequest.getPetsFromPetfinder($scope.petfinderReturn)
  };

  $scope.findPets();

});
