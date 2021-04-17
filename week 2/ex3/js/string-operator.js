// create vars to store greeting and first name
var greeting = 'Howdy ';
var firstName = 'Molly';

//create message to be displayed to user
var welcomeMessage = greeting + firstName + '!';

//get element with ID of 'greeting' and store in a var
var el = document.getElementById('greeting');
el.textContent = welcomeMessage;

//replace text content with message
el.textContent = welcomeMessage;

var el2 = document.getElementById('greeting2');
el2.textContent