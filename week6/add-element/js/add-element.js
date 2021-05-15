// Create a new element and store it in a variable.
var newEl = document.createElement('li');
 
// Create a text node and store it in a variable.
var newText = document.createTextNode('quinoa');
 
// Attach the new text node to the new element.
newEl.appendChild(newText);
 
// Find the position where the new element should be added.
var position = document.getElementsByTagName('ul')[0];
 
// Insert the new element into its position.
position.appendChild(newEl);


// /*Remove element js */
// // Store the element to be removed in a variable.
// var removeEl = document.getElementsByTagName('li')[0];

// // Find the element which contains the element to be removed.
// var containerEl = document.getElementsByTagName('ul')[0];

// // Remove the element.
// containerEl.removeChild(removeEl);