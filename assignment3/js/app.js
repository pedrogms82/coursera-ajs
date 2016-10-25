(function () {
'use strict';

angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItems);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController (MenuSearchService){

  var vm = this;

  vm.narrowMenu  =  function (){

    var promise = MenuSearchService.getMatchedMenuItems(vm.searchTerm);

    promise.then(
      function success(result){
          // process result and only keep items that match
          var foundInMenu = [];
          var menu = result.data;

          for (var i = 0; i < menu.menu_items.length; i++) {
              var description = menu.menu_items[i].description;
              if (description.toLowerCase().indexOf(vm.searchTerm) !== -1) {
              foundInMenu.push(menu.menu_items[i]);
              }
          }
          // return processed items
          vm.found = foundInMenu;
          console.log(vm.found);
    },
      function error(){
        console.log("peta");
    });
  }

}


function MenuSearchService ($http){

  var vm = this;
  vm.getMatchedMenuItems = function (searchTerm){
     return $http({
            method: "GET",
            url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
    });
  }

}

function FoundItems (){

  var ddo = {
      templateUrl: 'views/FoundItems.html' ,
      scope : {
        onRemove: '&',
        foundItems: '<'
      },
      controller: NarrowItDownController,
      controllerAs: 'menuCtrl',
      bindToController: true
  };
  return ddo;

}

})();
