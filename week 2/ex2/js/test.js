var price, quantity, total;
price = 5;
quantity = 14;
total = price * quantity;

//a refractred version of the previous statements
/* var price = 5, quantity = 14, total;
total= price * quantity; */

//array
var colors = ['yellow', 'green', 'blue'];

//another way to create an array
var colors2 = new Array('yellow', 'green', 'blue');

//empty array: bookmarking to edit later
var colors = []

// save the color yellow in the var name backpackcolor
var backpackColor = colors2[0];//value is yellow

// Change the array color at index 0
// now arry is ['purple', 'blue', 'green', 'mauve]
colors2[0] = 'purple';

//change backpackColor to match the array[0]
backpackColor = colors2[0];


var numColors = color2.length;

document.getElementById('something').textContent = 'see our ' + numColors + ' backpacks'

//Note careful with putting new array items as index for each item shifts