"use strict";

app.controller("CarouselCtrl", function($scope, $timeout) {

    // $scope.number1 = [ 
    // {
    //   title: "Dog of the Week",
    //   img: "http://photos.petfinder.com/photos/pets/35334386/1/?bust=1465997969&width=300&-pn.jpg"
    // },
    // {
    //   title: "Cat of the Week",
    //   img: ""
    // },
    // {
    //   title: "MACC Wishlist",
    //   img: ""
    // },
    // {
    //   title: "Low-cost Rabies Clinic",
    //   img: ""
    // },
    // {
    //   title: "Sample News Page",
    //   img: ""
    // }];

    $scope.images = [ "http://photos.petfinder.com/photos/pets/35377943/1/?bust=1466206949&width=500&-x.jpg", "http://photos.petfinder.com/photos/pets/35346846/1/?bust=1465925768&width=500&-x.jpg", "b", "c", "d" ];

    $scope.captions = [ "Dog of the Week", "s", "s", "s", "s"];


    $scope.slickConfig1Loaded = true;
    $scope.updateNumber1 = function () {
      $scope.slickConfig1Loaded = false;
      $scope.number1[2] = '123';
      $scope.number1.push(Math.floor((Math.random() * 10) + 100));
      $timeout(function () {
        $scope.slickConfig1Loaded = true;
      }, 5);
    };
    $scope.slickCurrentIndex = 0;
    $scope.slickConfig = {
      dots: true,
      autoplay: true,
      initialSlide: 3,
      infinite: true,
      autoplaySpeed: 3750,
      method: {},
      event: {
        beforeChange: function (event, slick, currentSlide, nextSlide) {
          console.log('before change', Math.floor((Math.random() * 10) + 100));
        },
        afterChange: function (event, slick, currentSlide, nextSlide) {
          $scope.slickCurrentIndex = currentSlide;
        },
        breakpoint: function (event, slick, breakpoint) {
          console.log('breakpoint');
        },
        destroy: function (event, slick) {
          console.log('destroy');
        },
        edge: function (event, slick, direction) {
          console.log('edge');
        },
        reInit: function (event, slick) {
          console.log('re-init');
        },
        init: function (event, slick) {
          console.log('init');
        },
        setPosition: function (evnet, slick) {
          console.log('setPosition');
        },
        swipe: function (event, slick, direction) {
          console.log('swipe');
        }
      }
    };

});