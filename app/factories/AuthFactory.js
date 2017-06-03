"use strict";

app.factory("AuthFactory", function(){

    let currentUser = null;

    const createUser = function(userObj){
        return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password)
        .catch( function(error){
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log("error:", errorCode, errorMessage);
        });
    };

    const loginUser = function(userObj) {
        return firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password)
        .catch( function(error){
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log("error:", errorCode, errorMessage);
        });
    };


    const logoutUser = function(){
        console.log("logoutUser");
        return firebase.auth().signOut();
    };


    const isAuthenticated = function (){
        console.log("AuthFactory: isAuthenticated");
        return new Promise ( (resolve, reject) => {
            firebase.auth().onAuthStateChanged( (user) => {
                if (user){
                    currentUser = user.uid;
                    console.log("user", user.uid);
                    resolve(true);
                }else {
                    resolve(false);
                }
            });
        });
    };

    const getUser = function(){
        return currentUser;
    };

    return {
      createUser, 
      loginUser, 
      logoutUser, 
      isAuthenticated, 
      getUser
    };

});