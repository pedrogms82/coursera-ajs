(function () {
'use strict';

angular.module('miPrimeraApp', [])

.controller('miPrimerController', function ($scope){
  $scope.name = "Peter";
  $scope.sayHello = function () {
    return "Hola Coursera";
  };

});

})();
