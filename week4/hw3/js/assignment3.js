//create a function templet using constructor  notation
function Menu(item, price, cost) {
    //
    this.item = item;
    this.price = price;
    this.cost = cost;
    //Create method by creating a function that returns profit of item
    this.itemProfit = function () {
        return this.price - this.cost;
    };
}

var cocktailMenu = new Menu('Cosmo', 12, 3);
var kidMenu = new Menu('Tendies', 5, 2);

var itemDetails1 = 'Product: ' + cocktailMenu.item + '</br>Price: $' + cocktailMenu.price + '</br>Cost: $' + cocktailMenu.cost + '</br>Profit: $'+ cocktailMenu.itemProfit();

var itemDetails2 = 'Product: ' + kidMenu.item + '</br>Price: $' + kidMenu.price + '</br>Cost: $' + kidMenu.cost + '</br>Profit: $'+ kidMenu.itemProfit();

document.getElementById('item1').innerHTML = itemDetails1;
document.getElementById('item2').innerHTML = itemDetails2;
