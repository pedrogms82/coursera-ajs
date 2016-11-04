(function () {
'use strict';

angular.module('data')
.component('categories', {
//  templateUrl: 'src/shoppinglist/shoppinglist.template.html',
  controller: categoriesController,
  bindings: {
    items: '<'
  }
});

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
