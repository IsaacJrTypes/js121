//prompt a message and store user input in a variable
var userInputName = prompt('Let\'s play the sum game.\nPlease enter your name');
var userInputNum1 = prompt('Enter first number');
var userInputNum2 = prompt('Enter second number');

//create var to store sum of two parseInt variables 
var totalSum = parseInt(userInputNum1) + parseInt(userInputNum2);

//create var which stores concatinated message with user input variables
var message = 'Hi, ' + userInputName + '! ' + 'The sum of ' + userInputNum1 + ' + ' + userInputNum2 + ' is ' + totalSum;

//create var to hold method .getElementByid for message
var getElement = document.getElementById('response');

//replaces text content with concatinated message on line 10
getElement.textContent = message;