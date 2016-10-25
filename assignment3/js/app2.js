(function () {
'use strict';

angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController', NarrowItDownController);
//.service('MenuSearchService', MenuSearchService)
//.directive('foundItems', FoundItems);

//NarrowItDownController.$inject = ['$scope'];
function NarrowItDownController (){

  var vm = this;

  vm.pulsa = function(){
    console.log("has pulsado");
  }
  vm.searchTerm = "no";

  console.log("this " , this);
  vm.pulsa();



}
})();
