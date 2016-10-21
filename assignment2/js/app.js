(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController (ShoppingListCheckOffService){

  var Lista = this;
  Lista.items = ShoppingListCheckOffService.getFalta();

  //console.log(Lista.items);
  //console.log(Lista.items.length);


  Lista.Comprar = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
    var num = ShoppingListCheckOffService.getFalta();
    Lista.verMensaje = (Lista.items.length < 1 ) ? 1:0;
    //console.log(Lista.verMensaje);
  };

}



AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController (ShoppingListCheckOffService){

  var Lista = this;
  Lista.items = ShoppingListCheckOffService.getCompletada();

}

function ShoppingListCheckOffService (){

  var service = this;

  var ListaFalta = [{ name: "cookies", quantity: 10 },
                    { name: "beer", quantity: 10 },
                    { name: "chips", quantity: 5 },
                    { name: "coke", quantity: 5 },
                    { name: "cigarrete", quantity: 20 }];
  var ListaCompletada = [];

  service.buyItem = function (itemIndex) {
     var Compra = ListaFalta[itemIndex]  ;
     ListaFalta.splice(itemIndex, 1);
     ListaCompletada.push(Compra);

  }

  service.getFalta = function (){
    return ListaFalta;
  }

  service.getCompletada = function (){
    return ListaCompletada;
  }

}

})();
