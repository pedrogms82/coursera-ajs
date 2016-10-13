
(function () {
'use strict';

angular.module('myApp', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {

// Start  style default

$scope.menu = "";


//function to check items on menu

$scope.menuCheck = function (){

// Clean blank spaces in string

  var menu = $scope.menu.replace(/ /g,"");
//  console.log("Menu " +menu);


  if (menu === "") {

//If menu is empty return red style and enter data

    $scope.resultado = "Please enter data first";
    $scope.estilo = "red";

  }
  else {

//else return green style and function to count items

    var numItems = calculaNumItems (menu);
    $scope.resultado = numItems;
    $scope.estilo = "green";
  }
}

function calculaNumItems(cadena) {

// split string for create array

   var items = cadena.split(',');
   //console.log(items);

//if array is empty delete item

   for (var i=0; i<items.length;i++){
      if (items[i] == "") {
        items.splice(i,1);
        i--;
      }

   }
   //console.log(items);

//count total of items and return enjoy or too much

   if (items.length < 4 ) return "Enjoy!" // + items.length  +", " + cadena
   else return "Too much!" // + items.length+ ", " + items

}


}

})();
