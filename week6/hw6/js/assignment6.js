/* Declare horses to var */
var mrHorse = "Mr.Horse",
  boJack = "Bojack",
  lilSabastian = "Little Sebastian",
  quickDraw = "Quick Draw McGraw",
  epona = "Epona";
/*Change announcement  */
//Get element by ID to change announcements in a var
var announcement = document.getElementById("announcement");

//Get first child element to access nodeValue
var getAnnouncement = announcement.firstChild.nodeValue;

//Replace announcement with results
updateAnnouncement = getAnnouncement.replace("Place Your Bets!", "Results");

//Update announcement with new value
announcement.firstChild.nodeValue = updateAnnouncement;

/* Change Winner attribute */
//place first place in var
var firstPlace = document.getElementsByTagName("li").item(0);

//Change class name to .winner
firstPlace.setAttribute("class", "winner");

/* Change second and third attribute with node-list */
//Create var to store nodelist with placeholder
var runnerups = document.querySelectorAll("li.placeholder");

//If nodelist contain items
if (runnerups.length > 0) {
  //use for loop to add 2nd and third attributes
  for (var i = 0; i < runnerups.length - 2; i++) {
    //Change attributes on runnerups indexed items
    runnerups[i].setAttribute("class", "top3");
  }
}

/* Remove element */
//store removed participant for removal in var
var removeHorseElement = document.getElementsByTagName("li").item(3);

//store parent element of removeHorseElement in var
var listContainer = removeHorseElement.parentNode;

//Remove element with removeChild
listContainer.removeChild(removeHorseElement);

/* Add new report element */
//Create new element and store in var
var newElement = document.createElement("p");

//Store a text node in a var
var newTextNode = document.createTextNode(
  "Disqulification: " + quickDraw + " For Early Start"
);

//append textNode to new element
newElement.appendChild(newTextNode);

//store where the new element should be placed in a var
var placeNewElement = document.getElementById("report");

//Insert element in desired location
placeNewElement.appendChild(newElement);

/* Update list with placement results */
//Set firstPlace (line 16) with message
firstPlace.innerHTML = "<em>Winner</em>: " + lilSabastian;

//Set 2nd place var
var secondPlace = document.getElementsByTagName("li").item(1);

//insert message
secondPlace.innerHTML = "2nd: " + epona;

//Set 3nd place var
var thirdPlace = document.getElementsByTagName("li").item(2);

//insert message
thirdPlace.innerHTML = "3rd: " + mrHorse;

//Set 3nd place var
var lastPlace = document.getElementsByTagName("li").item(3);

//insert message
lastPlace.innerHTML = "Last: " + boJack;
