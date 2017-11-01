$(document).ready(function() {

var lastClicked = "";


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

    
  $(".front").click(function() {
    // flip the card when you play the game
  console.log("card clicked");
// swapping card class here
  lastClicked = $(this);
  $(lastClicked).attr("class", "cards back pair1");


  });

    $(".back").click(function() {
    // flip the card back when you play the game
  console.log("card clicked back");
// swapping card class here
  lastClicked = $(this);
  $(lastClicked).attr("class", "cards front pair1");


  });

//    
//    $(document).off().on("click", ".front", function() {
//    // flip the card when you play the game
//  console.log("card clicked");
//// swapping card class here
//  lastClicked = $(this);
//  $(lastClicked).attr("class", "cards back pair1");
//
//
//  });
//
//    $(document).off().on("click", ".back", function() {
//    // flip the card back when you play the game
//  console.log("card clicked back");
//// swapping card class here
//  lastClicked = $(this);
//  $(lastClicked).attr("class", "cards front pair1");
//
//
//  });


});
