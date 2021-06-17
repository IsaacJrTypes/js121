//accordian widget
$(function () {
  $("#accordion").accordion();
});

//Tab widget
$(function () {
  $("#tabs").tabs();
});

//progressbar widget
$(function () {
  $("#progressbar").progressbar({
    value: 55,
  });
});

//tool tip
$(function () {
  $(document).tooltip();
});

//Button toggle
$("#btn1").on("click", function () {
  $(".para1").toggle();
});
$("#btn2").on("click", function () {
  $(".para2").toggle();
});
$("#btn3").on("click", function () {
  $(".para3").toggle();
});
$("#btn4").on("click", function () {
  $(".para4").toggle();
});

//control group w/ dialog
$(function () {
  $(".controlgroup").controlgroup();
});

$(function () {
  $("#dialog1").dialog({
    autoOpen: false,
    show: {
      effect: "blind",
      duration: 1000,
    },
    hide: {
      effect: "fade",
      duration: 1000,
    },
  });

  $("#vote").on("click", function () {
    //get value and store in var
    var bodyType = $("#bodyType").val();
    var map = $("#map").val();
    var gameMode = $("#gameMode").val();
    var gameModes = $('input[name="gameModes"]:checked').val();
    //store message in var
    var voteInfo = `You voted for ${bodyType}, ${map}, ${gameMode} and ${gameModes} `;
    //execute dialog
    $("#dialog1").dialog("open");
    //write message by getElementbyId
    document.getElementById("dialog1").innerHTML = voteInfo;
  });
});

//slider w/ dialog
$(function () {
  $("#slider").slider({
    value: 100,
    min: 0,
    max: 100,
    step: 5,
    slide: function (event, ui) {
      $("#amount").val("$" + ui.value);
    },
  });
  $("#amount").val("$" + $("#slider").slider("value"));
});

$(function () {
  $("#dialog2").dialog({
    autoOpen: false,
    show: {
      effect: "blind",
      duration: 1000,
    },
    hide: {
      effect: "fade",
      duration: 1000,
    },
  });

  $("#sliderBtn").on("click", function () {
    //get slider value and store in var
    var value = $("#slider").slider("value");
    var donationInfo = "You donated $" + value;
    //execute dialog
    $("#dialog2").dialog("open");
    //write message by getElementbyId
    document.getElementById("dialog2").innerHTML = donationInfo;
  });
});
