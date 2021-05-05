var scores = [24, 32, 17, 54, 100, 38, 63, 42];// Array of scores
//index: [0,1,2,3,4,5,6,7]
var arrayLength = scores.length;// Items in array
var roundNumber = 0;            // Current round
var msg = '';                   // Message
 
// Loop through the items in the array
for (var i = 0; i < arrayLength; i++) {
 
  // Arrays are zero based (so 0 is round 1)
  // Add 1 to the current round
  roundNumber = (i + 1);
 
  // Write the current round to message
  msg += 'Round ' + roundNumber + ': ';
 
  // Get the score from the scores array
  msg += scores[i] + '<br />';
}
 
document.getElementById('answer').innerHTML = msg;