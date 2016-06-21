"use strict";

app.factory("PetfinderRequest", function($q, $http, firebaseURL, AuthFactory) {

  var getPetsFromPetfinder = function(array) {
    // var animals = [];

    return $q(function(resolve, reject) {
      $http.get("http://api.petfinder.com/shelter.getPets?key=576a9be0464ad49bafe9b98ad8b6eccb&id=TN172&count=200&output=full&format=json")
        .success(function(animalCollection) {
          Object.keys(animalCollection.petfinder.pets.pet).forEach(function(searchResult) {
            array.push(animalCollection.petfinder.pets.pet[searchResult]);
          });
          console.log(array);
          resolve(array);
        })
        .error(function(error) {
          reject(error);
        });
    });
  };

var postNewFavorite = function(newFavorite){
        let user = AuthFactory.getUser();
        console.log("user", user);
        return $q(function(resolve, reject) {
            $http.post(
                firebaseURL + "favorites.json",
                JSON.stringify({
                    animal: newFavorite.animal,
                    petShelterId: newFavorite.petShelterId,
                    size: newFavorite.size,
                    sex: newFavorite.sex,
                    name: newFavorite.name,
                    breed: newFavorite.breed,
                    age: newFavorite.age,
                    img: newFavorite.img,
                    uid: user.uid
                })
            )
            .success(
                function(objectFromFirebase) {
                    resolve(objectFromFirebase);
                }
            ).error(function(error){
          reject(error);
            });
        });
  };

  var getFavoritePets = function() {
        let favorites = [];
        var user = AuthFactory.getUser();
        return $q(function(resolve, reject) {
            $http.get(`${firebaseURL}favorites.json`)
                .success(function(petObject) {
                    var petCollection = petObject;
                    Object.keys(petCollection).forEach(function(key) {
                      if (petCollection[key].uid === user.uid) {
                        petCollection[key].id = key;
                        favorites.push(petCollection[key]);
                      }
                    });
                    resolve(favorites);
                })
                .error(function(error) {
                    reject(error);
                });
        });
    };

  return {
    getPetsFromPetfinder: getPetsFromPetfinder,
    postNewFavorite: postNewFavorite,
    getFavoritePets:getFavoritePets
  };

});
