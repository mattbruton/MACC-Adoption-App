"use strict";

app.factory("PetFactory", ['$q', '$http', function ($q, $http) {

  const getPetsFromPetfinder = () => {
    return $http.get("./api/pets")
      .then((pets) => {
        return pets.data.pet;
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
