var ticTacToe = (function () {
  //global variables
  var moves = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  var counter = 1;
  var x = "x";
  var o = "o";
  var currentPlayer = x;
  //the game messager
  var displayMessage = function(message) {
    $(".message").html(message);
  }
  //switches player after click
  var switchPlayer = function() {
    currentPlayer = (currentPlayer === x) ? o : x;
    displayMessage("Current Player is: " + currentPlayer);
    console.log(currentPlayer);

  };
  //test if move is leagl
  var isValidMove = function(moveIndex) {
    if (moves[moveIndex] === 0) {
      return true;
    } else {
      displayMessage("Please play on a blank cell");
      return false;
    }
  };
  //add player moves to moves array, & mark in box
  var makeMove = function($cell, moveIndex) {
      moves[moveIndex] = currentPlayer;
      $cell.html(currentPlayer);
      counter++
  }
  //test combo
   var testWinner = function() {
    var winCombinations = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
      [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ],
      win = 0;

    $.each(winCombinations, function(index, winCombination) {
      if (allEqual(winCombination)){
        switchPlayer();
        win++
        displayMessage("game over, " + currentPlayer + "'s won :) ");
        return false;
      }
    });
    //test draw
    if (win !== 0) {
      return reset();
    } else if (counter === 10) {
      displayMessage("cats game :/ ")
      reset();
      return true;
    } else {
      return false;
    }
  };
  //reset button appears after game ends, reloads window
  var reset = function() {
    $("#gameboard").off("click");
    $("button").css("display", "block").on("click", function() {

    });
  }
  //game "controller"
  var playGame = function($cell) {
    var moveIndex = $cell.attr("id");
    if (isValidMove(moveIndex)) {
      makeMove($cell, moveIndex);
      console.log(moves);
      switchPlayer();
    }
  }
  //helper function that tests moves-array to winning combos
  var allEqual = function (indexes) {
    return (moves[indexes[0]] === moves[indexes[1]]) &&
      (moves[indexes[0]] === moves[indexes[2]]) &&
      (moves[indexes[0]] !== 0);
  };

  return { playGame: playGame, testWinner: testWinner};

})();

$(document).ready(function() {
  $("#gameboard").on("click", ".cell", function() {
    ticTacToe.playGame($(this));
    ticTacToe.testWinner();
  });
});















