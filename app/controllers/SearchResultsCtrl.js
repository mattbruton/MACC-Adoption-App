app.controller('SearchResultsCtrl', function($scope, $window){


  $scope.selectPet = function(id) {
    $scope.animalsToDisplay.forEach(function(pet) {
      if (pet.shelterPetId.$t === id) {
        $rootScope.selectedPet = [];
        $rootScope.selectedPet.push(pet);
      }
    });
  };

  $scope.listPets = () => {
    $scope.results = JSON.parse($window.localStorage.getItem('pets'));
    console.log($scope.results);
  };
  
  $scope.listPets();

});
