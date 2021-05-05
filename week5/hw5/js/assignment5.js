//prompt a message and store user input in a variable
//need too use an alert to display average score

//need var to store: average, number of input scores, score total
var inputTotal = 0,
  inputCount = 0,
  average,
  entry;

do {
  entry = parseInt(prompt("Enter test score \nOr enter 999 to end entries"));
  inputTotal += entry;
  inputCount++;
  var average = (inputTotal - 999) / (inputCount - 1);
  console.log(inputTotal + "," + inputCount);
} while (entry != 999);

alert("Average score is " + average);
