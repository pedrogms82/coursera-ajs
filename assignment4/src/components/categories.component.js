(function () {
'use strict';

angular.module('data')
.component('categories', {
  templateUrl: 'src/templates/categories.template.html',
  //controller: categoriesController,
  bindings: {
    categories: '<'
  }
});


})();
