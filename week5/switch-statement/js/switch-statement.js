var msg;        // Message
var num1 = 5;
var num2 = 3;
var level = num1 - num2;  // Level
 
// Determine message based on level
switch (level) {
case 1:
    msg = 'Good luck on the first test';
    break;
 
case 2:
    msg = 'Second of three - keep going!';
    break;
 
case 3: //Value of three can be "string"
    msg = 'Final round, almost there!';
    break;
 
default:
    msg = 'Good luck!';
    break;
}
 
var el = document.getElementById('answer');
el.textContent = msg;