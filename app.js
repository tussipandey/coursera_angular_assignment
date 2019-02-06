(function () {
    'use strict';
    angular.module('ShoppingListCheckOff',[])
    .controller('ToBuyController',ToBuyController)
    .controller('AlreadyBoughtController',AlreadyBoughtController)
    .service('ShoppingListCheckOffService',ShoppingListCheckOffService);
    
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    
    function ToBuyController(ShoppingListCheckOffService){
        var toBuy = this;
        toBuy.items =ShoppingListCheckOffService.getItemsToBuy();
        toBuy.buyItem = function (itemIndex){
            ShoppingListCheckOffService.buyItem(itemIndex);
            
            
        }
    }
    
     
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var alreadyBought = this;
        alreadyBought.items =ShoppingListCheckOffService.getItemsBought();
        
        
            
        }
    
    
    function ShoppingListCheckOffService() {
        
        var service=this;
        var itemsToBuy = [];
        var itemsBought = [];
        
    itemsToBuy = InitialiseBuyList();
    
        service.getItemsToBuy =function(){
           return itemsToBuy;
        };
        
        service.getItemsBought = function() {
           
             return itemsBought;
        };
        
        service.buyItem = function (itemIndex){
             var removedItems = itemsToBuy.splice(itemIndex,1);
            itemsBought.push(removedItems[0]);
        }
        
        
        
    }


function InitialiseBuyList() {
    return [ { name :"Cookies", quantity:10},
               { name :"Chocolates", quantity:5},
            { name :"Bread", quantity:7},
            { name :"Pastries", quantity:8},
            { name :"Egg", quantity:4} ];
};
    
    
    
})();