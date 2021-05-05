var scoreCount = -1;       // Set counter to 1
var scoreTotal = -999;//need to reset count and total so 999 does not get added to calculations 
var entry;    // Message
 
// enter scores until 999 is entered
while (entry != 999) {
  entry = parseInt(prompt('Enter test score\nOr enter 999 to end entries'));
  scoreCount++;
  scoreTotal += entry;
  console.log(scoreCount + "," + scoreTotal)
}
 
alert('Average score is: ' + scoreTotal / scoreCount);