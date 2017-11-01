$(document).ready(function() {




  $("#startButton").click(function() {
    // flip the view when you start the game
    console.log("Button clicked");
    $("#startScreen").fadeToggle(function() {
      $("#startScreen").css("display", "none");
    });
    $("#gameScreen").fadeToggle(function() {
      $("#gameScreen").css("display", "inherit");
    });


  });




});
