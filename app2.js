(function() { /* IIFE */
  'use strict';

  angular.module('LunchCheck', [])

  .controller('LunchCheckController', LunchCheckController);

  // Protect dependency injection from minification
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.items = '';
    $scope.message = '';
    $scope.messageType = ''; /*additional feature*/

    $scope.displayMessage = function () {
      var messageToDisplay = computeMessage($scope.items);
      $scope.message = messageToDisplay;
    };

    function computeMessage(items) {
      // predefining a filter function for the bonus feature
      // i.e. rejecting empty elements between commas!
      function notEmpty(item) {
        // returns true for non-empty strings (as '' is false)
        return item.trim();
      }

      var message;
      var itemsCount = items.split(',').filter(notEmpty).length;
      if (itemsCount) {
        message = itemsCount <= 3 ? 'Enjoy!' : 'Too much';
        $scope.messageType = 'success';
      } else {
        // 0 is false: thus empty string provided
        message = 'Please enter data first';
        $scope.messageType = 'error';
      }

      return message;
    }
  }

})();
