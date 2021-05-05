var i = 1;       // Set counter to 1
var msg = '';    // Message
 
// Store 5 times table in a variable
do {
  msg += i + ' x 5 = ' + (i * 5) + '<br />';
  i++;// This code reads first
} while (i < 4); //this code checks conditions
// Note how this is already 1 and it still runs
 //do while loop 
document.getElementById('answer').innerHTML = msg;
