(function () {
'use strict';

angular.module('data')
.controller('categoriesController', categoriesController );

categoriesController.$inject = ['MenuDataService']
function categoriesController(MenuDataService) {
  var Controller = this;
  console.log("aqui");
  var categories = MenuDataService.getAllCategories();
  categories.then(
      function success(result){
        console.log("R ",result);
        Controller.items = result.data;
        console.log("D ",Controller.items);
      },
      function error(){
        console.log("Error at get categories");
      });
  console.log("C ",categories);
}

})();
