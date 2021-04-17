//create two var to store value in each
var firstNum = 1, secondNum = 2;

//create var that stores sum of two variables
var totalSum = firstNum + secondNum;

//Create var with message to be displayed to user
var greeting = 'Welcome to my calculator';
var sumResponse = 'The sum of ' + firstNum + ' + ' + secondNum + ' is : ' + totalSum;

//create var that stores method .getElementByID for messages 
var getElement1 = document.getElementById('greeting');
var getElement2 = document.getElementById('calculator');

//replaces text content with messages set on line 8 & 9
getElement1.textContent = greeting;
getElement2.textContent = sumResponse;
