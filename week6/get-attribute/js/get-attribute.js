// var firstItem = document.getElementById("one"); // Get first list item
// if (firstItem.hasAttribute("class")) {
//   // If it has class attribute
//   var attr = firstItem.getAttribute("class"); // Get the attribute

//   // Add the value of the attribute after the list
//   var el = document.getElementById("scriptResults");
//   el.innerHTML = "<p>The first item has a class name: " + attr + "</p>";
// }

/*Other methods*/

var firstItem = document.getElementById('one');
firstItem.className = "cool";

var fourthItem = document.getElementsByTagName("li").item(3);
fourthItem.setAttribute('class' , 'cool');// adds class and replaces with cool css class

var firstItem = document.getElementById('one');
if(firstItem.hasAttribute('class')){
    firstItem.removeAttribute('class');
}
