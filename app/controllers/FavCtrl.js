"use strict";

app.controller("FavCtrl", function($scope, $rootScope, PetfinderRequest, $location) {

  $scope.favoritePets = [];

  $scope.selectedPet = $rootScope.selectedPet;

  $scope.displayFavorites = function(data) {
    PetfinderRequest.getFavoritePets().then(function(data) {
      $scope.favoritePets = data;
      console.log(data);
    })
  };

  $scope.displaySingleFavorite = function(favoriteId) {
    PetfinderRequest.getFavoritePets().then(function(response) {
      response.forEach(function(pet) {
        if (favoriteId === pet.id) {
          $rootScope.selectedPet = pet;
        }
        $location.path(`/details/${$rootScope.selectedPet.id}`);
      })
      console.log(response);
    })
  }

  $scope.returnToFavorites = function() {
    $location.path(`/favorites`);
  };

  $scope.removeFromFavorites = function(favoriteId) {
    console.log(favoriteId);
    PetfinderRequest.deleteFavorite(favoriteId).then(function(response) {
      PetfinderRequest.getFavoritePets().then(function(allFavorites) {
        $scope.favoritePets = allFavorites;
        $location.path(`/favorites`);
      });
    });
  };

  $scope.displayFavorites();

});
