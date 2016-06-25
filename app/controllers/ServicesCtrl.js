"use strict";

app.controller("ServicesCtrl", function($scope) {

  $scope.collapsibleElements = [{
        title: 'Adoption Fees',
        content: 'Dogs: $90',
        content2: 'Cats: $40',
        content3: 'Kittens: $60',
        text: '*The adoption fee includes spay/neuter, microchip, rabies license, and up to date vaccinations.'

    },{
        title: ' Location ',
        content: `Metro Animal Care and Control`,
        content2: '5125 Harding Place',
        content3: 'Nashville, TN 37211'
    },{
        title: 'Shelter Hours',
        content: `Monday - 10am-4pm`,
        content2: 'Tuesday - 10am-4pm',
        content3: 'Wednesday - 10am-4pm',
        content4: 'Thursday - 10am-6pm',
        content5: 'Friday - 10am-4pm',
        content6: 'Saturday - 10am-4pm'
    }
];

});
