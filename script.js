$(document).ready(function() {

  var lastClicked = "";



  $("#startButton").click(function() {
    var seconds_left = 10;
    var interval = setInterval(function() {
    document.getElementById('timer_div').innerHTML = --seconds_left;

    if (seconds_left <= 0)
    {
       document.getElementById('timer_div').innerHTML = "You have lost.";
       clearInterval(interval);
    }
}, 1000);
         // flip the view when you start the game
    console.log("Button clicked");
    $("#startScreen").fadeToggle(function() {
      $("#startScreen").css("display", "none");
    });
    $("#gameScreen").fadeToggle(function() {
      $("#gameScreen").css("display", "inherit");
    });
  });

  $(document).on("click", ".front", function() {
    // flip the card when you play the game
    console.log("card clicked");
    // swapping card class here
    lastClicked = $(this);
    $(lastClicked).attr("class", "cards back");
    $(lastClicked).children().attr("src", "images/1.jpg");
  });

  $(document).on("click", ".back", function() {
    // flip the card back when you play the game
    console.log("card clicked back");
    // swapping card class here
    lastClicked = $(this);
    $(lastClicked).attr("class", "cards front");
    $(lastClicked).children().attr("src", "images/back_of_card_small.jpg");
  });
});
