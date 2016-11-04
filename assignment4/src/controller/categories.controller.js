(function () {
'use strict';

angular.module('data')
.controller('categoriesController', categoriesController );

categoriesController.$inject = ['MenuDataService']
function categoriesController(MenuDataService) {
  console.log("Controller");
  var categories = MenuDataService;
  console.log("CAT GET ", categories.getAllCategories());
  console.log("CAT ",categories);
}

})();
