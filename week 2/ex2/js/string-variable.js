var username = 'Partner!';
var message = 'See our upcoming range';

//method finds id on line 10 in ex2.html
var elName = document.getElementById('name');

//replaces text in the element id: 'name'
elName.textContent = username;

//get the element with an id of note
var elNote = document.getElementById('note');

//replace the content of this element
elNote.textContent = message;

