"use strict";

app.controller("FavCtrl", function($scope, PetfinderRequest) {

  $scope.favoritePets = []; 

  $scope.displayFavorites = function(data) {
    PetfinderRequest.getFavoritePets().then(function(data){
      $scope.favoritePets = data;
    console.log(data);
    })
  };
    
  $scope.displayFavorites();

});