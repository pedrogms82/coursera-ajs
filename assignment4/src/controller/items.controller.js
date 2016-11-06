(function () {
'use strict';

angular.module('data')
.controller('itemsController', itemsController );

itemsController.$inject = ['items']
function itemsController(items) {
  var itemsCtrl = this;
  itemsCtrl.items = items;
}

})();
