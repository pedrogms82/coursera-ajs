(function () {
'use strict';

angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItems);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController (MenuSearchService){

  var vm = this;
  vm.foundTotal = 0;

  vm.removeItem = function (index){
    vm.found.splice(index,1);
    vm.foundTotal --;
  } // end removeItem

  vm.narrowMenu  =  function (){
    var promise = MenuSearchService.getMatchedMenuItems(vm.searchTerm);
    promise.then(
      function success(result){
        vm.found = result;
        vm.foundTotal = result.length;
      },
      function error(){
        console.log("Error in 2º promise");
      });
  } // end narrowMenu
}//End NarrowItDownController

MenuSearchService.$inject = ['$http'];
function MenuSearchService ($http){

  var vm = this;
  vm.getMatchedMenuItems = function (searchTerm){
     vm.searchTerm = searchTerm;
     return $http({
            method: "GET",
            url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
    }).then(
      function success(result){
          // process result and only keep items that match
          var foundInMenu = [];
          var menu = result.data;

          for (var i = 0; i < menu.menu_items.length; i++) {
              var description = menu.menu_items[i].description.toLowerCase();
                if (description.indexOf(vm.searchTerm) !== -1) {
                  foundInMenu.push(menu.menu_items[i]);
                }
          }
          // return processed items
          return foundInMenu;
    },
      function error(){
        console.log("Error in 1º promise");
    });
  }
}// End MenuSearchService

function FoundItems (){

  var ddo = {
      templateUrl: 'views/foundItems.html' ,
      scope : {
        onRemove: '&',
        items: '<'
      },
      controller: NarrowItDownController,
      controllerAs: 'menuCtrl',
      bindToController: true
  };

  return ddo;

}// End FoundItems

})();
