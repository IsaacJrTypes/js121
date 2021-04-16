// Create three variables to store the information needed.
var price= 5;
var quantity= 14;
var total= price * quantity;


var sale=.5;
total = total * sale;

// Get the element with an id of cost using method
var costEl = document.getElementById('cost');
costEl.textContent = '$' + total;
                                                                                                                                                                                                     
// Note: textContent does not work in IE8 or earlier - see explanation on website