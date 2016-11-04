angular.module('data')
.service('MenuDataService', MenuDataService );

MenuDataService.$inject = ['$http'];
function MenuDataService($http) {
  var MenuDS = this;


  MenuDS.getAllCategories = function () {
    // this method should return a promise which is a result of using the $http service, using the following REST API endpoint:
    // https://davids-restaurant.herokuapp.com/categories.json
    console.log("service");
    var response = $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/categories.json")
    });

    return response;

  };

  console.log(MenuDS.getAllCategories);
  MenuDS.getItemsForCategory(categoryShortName) = function (categoryShortName){
    //this method should return a promise which is a result of using the $http service, using the following REST API endpoint:
    //  https://davids-restaurant.herokuapp.com/menu_items.json?category=, where, before the call to the server, your code should
    //  append whatever categoryShortName value was passed in as an argument into the getItemsForCategory method.

  };
}
