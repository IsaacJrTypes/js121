//need var to store: average, number of input scores, score total and entry
var inputTotal = 0,
  inputCount = 0,
  average,
  entry;

//prompt a message and store user input in a variable
do {
  entry = parseInt(prompt("Enter test score \nOr enter 999 to end entries"));
  //add and stores entry input to input total
  inputTotal += entry;
  //incrase input counter by 1
  inputCount++;
  //reset input total by -999 and input counter by -1 and find average
  var average = (inputTotal - 999) / (inputCount - 1);
  //print to console for testing
  console.log(inputTotal + "," + inputCount);
  //Do-While loop: if entry is not 999 then run the previous code block
} while (entry != 999);
//need to use an alert to display average score
alert("Average score is " + average);
