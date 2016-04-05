$(document).ready(function() {

  var moves = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  var counter = 1;

  var $gameCells = $('.cell');

  var makeMove = $($gameCells).one('click', function() {
    var playerMark = (counter % 2 === 0) ? 'o' : 'x';
    var moveIndex = this.id
    $("p").eq(moveIndex).text(playerMark);
    moves[moveIndex] = playerMark;
    counter++;
    console.log(counter);
    testWinner();
  });

  var testWinner = function() {
    var winCombinations = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
      [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ];
    // var winIndex = -1;
    $.each(winCombinations, function(index, winCombination) {
      if (allEqual(winCombination)){
        // winIndex = index;
        console.log("we have a winner");
        return false;
      }
    });
    if (counter === 10) {
      console.log("cats game");
      return true
       //cat's game
    } else {
      return false
    }
    // if (winIndex !== -1) {
    //   return winCombinations[winIndex];
    // } else if (moves === 9) {
    //   return true; //draw
    // } else {
    //   return false;
    // }
  };

  var allEqual = function (indexes) {
    return (moves[indexes[0]] === moves[indexes[1]]) &&
      (moves[indexes[0]] === moves[indexes[2]]) &&
      (moves[indexes[0]] !== 0);
  };
});






