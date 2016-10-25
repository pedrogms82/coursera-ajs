(function () {
'use strict';

angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItems);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController (MenuSearchService){

  var vm = this;
//  vm.searchTerm = "beef";

  vm.found  =  function (){

  var promise = MenuSearchService.getMatchedMenuItems(vm.searchTerm);

   promise.then(
    function success(result){

          // process result and only keep items that match
          var foundItems = [];
          var menu = result.data;
         //console.log("menu" , menu);

          //procesar array de resultado si contiene searchTerm
          for (var i = 0; i < menu.menu_items.length; i++) {
            var description = menu.menu_items[i].description;
          //  console.log(description + " : " + menu.menu_items.length )
           console.log(vm.searchTerm);

            if (description.toLowerCase().indexOf(vm.searchTerm) !== -1) {
            foundItems.push(menu.menu_items[i]);
          //  console.log(description + " : " + menu.menu_items[i] )
            }
          }
          console.log("Encontrados" , foundItems);

          // return processed items
          vm.items = foundItems;
          console.log(vm.items);
    },
    function error(){
      console.log("peta");
    });
/*
  items.then(function success(result){

          // process result and only keep items that match
          var foundItems = [];
          var menu = result.data;
         //console.log("menu" , menu);

          //procesar array de resultado si contiene searchTerm
          for (var i = 0; i < menu.menu_items.length; i++) {
            var description = menu.menu_items[i].description;
          //  console.log(description + " : " + menu.menu_items.length )
           //console.log(vm.searchTerm);

            if (description.toLowerCase().indexOf(vm.searchTerm) !== -1) {
            foundItems.push(menu.menu_items[i]);
          //  console.log(description + " : " + menu.menu_items[i] )
            }
          }
          console.log("Encontrados" , foundItems);

          // return processed items
          return foundItems;
    },
    function error(){
      console.log("peta");
    });*/
  //  console.log(vm.found);


  }
// El valor devuelto por la funcion del servicio, deberia ser un array de objetos
  // console.log("found " , vm.found);
  // console.log("this " , this);

  //vm.found = function () {console.log(vm.searchTerm);}


}


function MenuSearchService ($http){

  var vm = this;
    ///console.log("this servicio " , this);

  //vm.test = function () {console.log('has echo click');}


  vm.getMatchedMenuItems = function (searchTerm){
  //  console.log("busco por ", searchTerm);
//  vm.searchTerm = searchTerm;

     return $http({
            method: "GET",
            url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
    });
  }

}

function FoundItems (){

  var ddo = {};
  return ddo;

}

})();
