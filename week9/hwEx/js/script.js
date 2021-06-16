//datepicker widget script
$( function() {
    $( "#datepicker" ).datepicker();
  } );

//accordian widget
$( function() {
    $( "#accordion" ).accordion();
  } );

//Animate
$( function() {
    var state = true;
    $( "#button" ).on( "click", function() {
      if ( state ) {
        $( "#effect" ).animate({
          backgroundColor: "#aa0000",
          color: "#000",
          width: 450
        }, 1000 );
      } else {
        $( "#effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 1000 );
      }
      state = !state;
    });
  } );

//Sortable widget
$( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  } );