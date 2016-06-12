"use strict";

app.factory("PetfinderRequest", function($q, $http) {

  var getPetsFromPetfinder = function(array) {
    var animals = [];

    return $q(function(resolve, reject) {
      $http.get("http://api.petfinder.com/shelter.getPets?key=576a9be0464ad49bafe9b98ad8b6eccb&id=TN172&count=200&output=full&format=json")
        .success(function(animalCollection) {
          Object.keys(animalCollection.petfinder.pets.pet).forEach(function(searchResult) {
            array.push(animalCollection.petfinder.pets.pet[searchResult]);
          });
          resolve(array);
        })
        .error(function(error) {
          reject(error);
        });
    });
  };

  return {
    getPetsFromPetfinder: getPetsFromPetfinder
  };

});
