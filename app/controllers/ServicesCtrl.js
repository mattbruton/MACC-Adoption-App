"use strict";

app.controller("ServicesCtrl", function($scope) {

  $scope.collapsibleElements = [{
    title: 'Adoption Fees',
    content: 'Dogs: $90',
    content2: 'Cats: $40',
    content3: 'Kittens: $60',
    text: '*The adoption fee includes spay/neuter, microchip, rabies license, and up to date vaccinations.'

  }, {
    title: ' Location ',
    content: `Metro Animal Care and Control`,
    content2: '5125 Harding Place',
    content3: 'Nashville, TN 37211'
  }, {
    title: 'Shelter Hours',
    content: `Monday - 10am-4pm`,
    content2: 'Tuesday - 10am-4pm',
    content3: 'Wednesday - 10am-4pm',
    content4: 'Thursday - 10am-6pm',
    content5: 'Friday - 10am-4pm',
    content6: 'Saturday - 10am-4pm'
  }, {
    title: '2016 Low-Cost Rabies Clinic Information',
    text: `The Metro Public Health Department is making a change to the annual rabies vaccination clinics. Metro Public Health Department will host a low-cost rabies vaccination clinic once a month at Metro Animal Care and Control from February-November in 2016.`,
    text2: 'The monthly rabies clinics will replace the annual rabies clinics previously held each March at area Metro Schools and Metro Parks.',
    text3: 'The change to monthly vaccination clinics will allow community members more flexibility to obtain low-cost rabies vaccinations throughout the year.',
    text4: 'MACC recently made a change to the annual low-cost rabies vaccination clinics and now hosts a monthly rabies vaccination clinic the third Saturday of each month at the shelter from February-November in 2016. MACC is pleased to announce additional local veterinarians will be hosting low-cost rabies clinics. Cost: $10.'
  }];

});
