//prompt a message and store user input in a variable
//need too use an alert to display average score


//need var to store: average, number of input scores, score total
var inputTotal = -999;
var inputCount = -1;
var average;
var entry;

do{
    entry = parseInt(prompt('Enter test score \nOr enter 999 to end entries'));
    inputTotal += entry;
    inputCount++;
    var average = inputTotal / inputCount;
    console.log(inputTotal + "," + inputCount)
}while(entry != 999);


alert("Average number is " + average);