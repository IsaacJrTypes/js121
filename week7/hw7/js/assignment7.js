//Select DOM query of element node
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
  //Select output DOM node 
  var mpgOutput = document.getElementById("mpgCalculated");
  //change output DOM node value to value in mpgCalculated
  mpgOutput.value = mpgCalculated;
  console.log(milesDrivenInput);
  console.log(gasUsedInput);
  console.log(mpgCalculated);
  console.log(mpgOutput)
}

//wrap function with anon function calling event function
window.onload = function () {
  form.addEventListener("submit", mpgCalculator);
};
