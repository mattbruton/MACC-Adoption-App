"use strict";

app.controller("FavCtrl", function($scope, $rootScope, PetfinderRequest, $location, Mandrill, AuthFactory) {

  $scope.favoritePets = [];

  $scope.selectedPet = $rootScope.selectedPet;

  $scope.displayFavorites = function(data) {
    PetfinderRequest.getFavoritePets().then(function(data) {
      $scope.favoritePets = data;
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
    })
  }

  $scope.returnToFavorites = function() {
    $location.path(`/favorites`);
  };

  $scope.removeFromFavorites = function(favoriteId) {
    PetfinderRequest.deleteFavorite(favoriteId).then(function(response) {
      PetfinderRequest.getFavoritePets().then(function(allFavorites) {
        $scope.favoritePets = allFavorites;
        $location.path(`/favorites`);
      });
    });
  };

  let user = AuthFactory.getUser();

   $scope.mandrillData = {
      'message': {
        'html': `<h3>${$scope.selectedPet.name}</h3><br><img src="${$scope.selectedPet.img}"><br><h3>Shelter ID: ${$scope.selectedPet.shelterPetId}</h3><br><h3>Breed: ${$scope.selectedPet.breed}</h3><br><h3>Age: ${$scope.selectedPet.age}</h3><br><h3>Size: ${$scope.selectedPet.size}</h3><br><h3>Sex: ${$scope.selectedPet.sex}</h3>`,
        'text': '',
        'subject': `${$scope.selectedPet.name}'s Information`,
        'from_email': 'matt@crabfinder.com',
        'from_name': 'MACC Pet Information',
        'to': [
          {
            name: user.password.email,
            email: user.password.email,
            'type': 'to'
          }
        ],
        'headers': {
          'Reply-To': 'noreply@crabfinder.com'
        }
      }
    };

    console.log($scope.mandrillData);

  $scope.sendPetInfo = function() {
    Mandrill.messages.send($scope.mandrillData).success(function(response){
      // Succes handling
    }).error(function(response){
      // Error handling
    });
  }

  $scope.displayFavorites();

});
