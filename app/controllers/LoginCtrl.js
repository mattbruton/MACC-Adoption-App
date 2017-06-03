"use strict";

app.controller("LoginCtrl", function ($scope, AuthFactory, $location) {

  $scope.account = {
    email: "",
    password: ""
  };

  $scope.logout = () => {
    AuthFactory.logoutUser()
    .then(function (data) {
      $location.path("/");
    }, function (error) {
      console.log("error occured on logout");
    });
  };

  //when first loaded, make sure no one is logged in
  if (AuthFactory.isAuthenticated()) {
    $scope.logout();
  }

  $scope.register = () => {
    console.log("you clicked register");
    AuthFactory.createUser({
      email: $scope.account.email,
      password: $scope.account.password
    })
    .then((userData) => {
      console.log("UserCtrl newUser:", userData);
      $scope.login();
    }, (error) => {
      console.log("Error creating user:", error);
    });
  };

  $scope.login = () => {
    AuthFactory.loginUser($scope.account)
    .then(() => {
      $location.path("/");
    });
  };
});