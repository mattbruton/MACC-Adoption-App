"use strict";

app.factory("PetFactory", ['$q', '$http', function ($q, $http) {

  const getPetsFromPetfinder = () => {
    return $http.get("http://api.petfinder.com/shelter.getPets?key=576a9be0464ad49bafe9b98ad8b6eccb&id=TN172&count=200&output=full&format=json")
      .then((animalCollection) => {
        let array = [];
        Object.keys(animalCollection.data.petfinder.pets.pet)
          .forEach((searchResult) => {
            array.push(animalCollection.data.petfinder.pets.pet[searchResult]);
          });
        return (array);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getSinglePetFromPetfinder = (petId) => {
    let pet = getPetsFromPetfinder().then((pets) => {
      let petArr = pets.filter((pet) => pet.id.$t === petId);
      return petArr[0];
    });
    return pet;
  };

  return {
    getPetsFromPetfinder,
    getSinglePetFromPetfinder
  };
}]);
