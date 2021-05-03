var score = 45;     // Score
var msg = 'Your score is too low to proceed';            // Message
 
if (score >= 540) {  // If score is 50 or higher
  msg = 'Congratulations!';
  msg += ' Proceed to the next round.'; 
}else {
    msg = "Score is to low";
}
 
var el = document.getElementById('answer');
el.textContent = msg;