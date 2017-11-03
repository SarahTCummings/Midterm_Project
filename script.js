
//This is an array that is holding our card images
var cardList = ["<img src='images/1.jpg'>", "<img src='images/1.jpg'>",
  "<img src='images/2.jpg'>", "<img src='images/2.jpg'>",
  "<img src='images/3.jpg'>", "<img src='images/3.jpg'>",
  "<img src='images/4.jpg'>", "<img src='images/4.jpg'>",
  "<img src='images/5.jpg'>", "<img src='images/5.jpg'>",
  "<img src='images/6.jpg'>", "<img src='images/6.jpg'>",
  "<img src='images/7.jpg'>", "<img src='images/7.jpg'>",
  "<img src='images/8.jpg'>", "<img src='images/8.jpg'>",
];
    var wholeDiv1 = "";
    var wholeDiv2 = "";
//These are the start button, display game screen, and begin timer functions.
$("#startButton").click(function() {
  var seconds_left = 91;
  var interval = setInterval(function() {
  document.getElementById('timer_div').innerHTML = --seconds_left;

  if (seconds_left <= 0)
  {
     document.getElementById('timer_div').innerHTML = "You have lost.";
     clearInterval(interval);
  }
}, 1000);
       // flip the view when you start the game
  $("#startScreen").fadeToggle(function() {
    $("#startScreen").css("display", "none");
  });
  $("#gameScreen").fadeToggle(function() {
    $("#gameScreen").css("display", "inherit");
  });
});

var memory_values = [];
var cardIDs = [];
var cardsFlipped = 0;
var clickCount = 0;

//This is the shuffle function
Array.prototype.memory_tile_shuffle = function() {
  var i = this.length,
    j, temp;
  while (--i > 0) {
    j = Math.floor(Math.random() * (i + 1));
    temp = this[j];
    this[j] = this[i];
    this[i] = temp;
  }
}

function newBoard() {
  cardsFlipped = 0;
  var output = '';
  //This calls the shuffle function & applies it to the image list & creates the board
  cardList.memory_tile_shuffle();
  for (var i = 0; i < cardList.length; i++) {
    output += '<div id="' + i + '" class="cards" ></div>';
  }
  //this line creates the divs for the cards
  document.getElementById('memory_board').innerHTML = output;
}

// this function is keeoping tabs on whether a card matches another
function memoryFlipTile(currentCardClicked, val) {
  if (currentCardClicked.innerHTML == "" && memory_values.length < 2) {
    currentCardClicked.innerHTML = val;
    // this conditional statement checks how many cards have been flipped
    if (memory_values.length == 0) {
      memory_values.push(val);
      cardIDs.push(currentCardClicked.id);
    wholeDiv1 = currentCardClicked;
      // if one cardss flipped and we flip another, this part of the function runs
    } else if (memory_values.length == 1) {
      memory_values.push(val);
      cardIDs.push(currentCardClicked.id);
       wholeDiv2 = currentCardClicked;
      // this part checks whether there is a match
      if (memory_values[0] == memory_values[1]) {
        cardsFlipped += 2;
        var var1 = wholeDiv1;
        var var2 = wholeDiv2;
        console.log("Thing we're looking for?", wholeDiv1);
        console.log("that other thing:", var1);

        setTimeout(function() {
          $(var1).attr("style", "visibility:hidden;");
          $(var2).attr("style", "visibility:hidden;");
          //do something special
        }, 3000);

        // console.log(memory_values[0]);
        // Clear both arrays
        memory_values = [];
        cardIDs = [];
        // This checks to see if the whole board is cleared
        if (cardsFlipped == cardList.length) {
          alert("You have won! Board cleared... click to restart");
          clickCount = 0;
          document.getElementById('memory_board').innerHTML = "";
          // a new board is created here
          newBoard();
        }
        // this happens when the cards don't match
      } else {
        function flip2Back() {
          // Flip the 2 cards back over
          var tile_1 = document.getElementById(cardIDs[0]);
          var tile_2 = document.getElementById(cardIDs[1]);
          tile_1.style.background = 'url(images/back_of_card_small.jpg) no-repeat';
          tile_1.innerHTML = "";
          tile_2.style.background = 'url(images/back_of_card_small.jpg) no-repeat';
          tile_2.innerHTML = "";

          wholeDiv1 = "";
          wholeDiv2 = "";
          // Clear both arrays
          memory_values = [];
          cardIDs = [];
        }
        setTimeout(flip2Back, 700);
      }
    }
  }
}

// this listens for clicks on cards
$(document).on("click", ".cards", function() {
  // flip the card when you play the game
  // swapping card class here
  clickCount++;
  document.getElementById("clickCounter").innerHTML = "Click Count: " + clickCount;
  lastClicked = $(this);
  // here we are calling the function to flip the cards
  memoryFlipTile(this, cardList[this.id]);
});

// this is the first thing that happens when you click the start button
newBoard();
