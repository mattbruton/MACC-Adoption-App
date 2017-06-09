"use strict";

app.controller("SearchFormCtrl", ['$scope', '$window', '$location', 'PetFactory', function ($scope, $window, $location, PetFactory) {

  $scope.types = {
    value: "",
    choices: ["Dog", "Cat", "Small & Furry"]
  };

  $scope.sizes = {
    value: "",
    choices: ["S", "M", "L"]
  };

  $scope.ages = {
    value: "",
    choices: ["Baby", "Young", "Adult", "Senior"]
  };

  $scope.sexes = {
    value: "",
    choices: ["M", "F"]
  };

  const animalPropMatchesSelectVal = (pet, petProp, prop) => {
    return pet[petProp].$t === prop.value;
  };

  const filterPets = (pets) => {
    return pets.filter((pet) => {
      let validator = {};
      validator.type = animalPropMatchesSelectVal(pet, "animal", $scope.types);
      if ($scope.ages.value !== "") {
        validator.age = animalPropMatchesSelectVal(pet, "age", $scope.ages);
      }
      if ($scope.sexes.value !== "") {
        validator.sex = animalPropMatchesSelectVal(pet, "sex", $scope.sexes);
      }
      if ($scope.sizes.value !== "") {
        validator.size = animalPropMatchesSelectVal(pet, "size", $scope.sizes);
      }
      return !Object.values(validator).includes(false);
    });
  };

  $scope.findPets = () => {
    PetFactory.getPetsFromPetfinder()
      .then((pets) => {
        $window.localStorage.setItem('pets', JSON.stringify(filterPets(pets)));
        $location.path('/search/results');
      });
  };
}]);
