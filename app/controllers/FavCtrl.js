"use strict";

app.controller("FavCtrl", function($scope, PetfinderRequest) {

  $scope.favoritePets = []; 

  $scope.displayFavorites = function(data) {
    PetfinderRequest.getFavoritePets().then(function(data){
      $scope.favoritePets = data;
    console.log(data);
    })
  };

  $scope.addNewFavorite = function() {
    $scope.newFavorite = $rootScope.selectedPet;
    PetfinderRequest.postNewFavorite($scope.newFavorite)
      .then(function successCallback(response) {
        $location.path("/favorites");
      });
  };

  $scope.removeFromFavorites = function(favoriteId) {
        console.log(favoriteId);
        PetfinderRequest.deleteFavorite(favoriteId).then(function(response) {
            PetfinderRequest.getFavoritePets().then(function(allFavorites) {
                $scope.favoritePets = allFavorites;
            });
        });
    };
    
  $scope.displayFavorites();

});