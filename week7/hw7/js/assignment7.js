//Select form element node
var form = document.getElementById("form");

//Bind event to DOM node with function
function mpgCalculator(event) {
  //prevent auto refresh
  event.preventDefault();

  //capture input values from text field
  var milesDrivenInput = document.getElementById("milesDriven").value;
  var gasUsedInput = document.getElementById("gallonsUsed").value;

  //Calculate mpg
  var mpgCalculated = milesDrivenInput / gasUsedInput;
  //Conditional statement that prompts alert if NaN
  if (isNaN(mpgCalculated)) {
    alert("Both entries must be numeric");
    //Reset form if entry isNaN
    if (true) {
      form.reset();
    }
  } else {
    //Select output DOM node
    var mpgOutput = document.getElementById("mpgCalculated");
    //change output DOM node value to mpgCalculated value and round
    mpgOutput.value = mpgCalculated.toFixed(1);
  }
}

//wrap function with anon function calling event function
window.onload = function () {
  form.addEventListener("submit", mpgCalculator);
};
