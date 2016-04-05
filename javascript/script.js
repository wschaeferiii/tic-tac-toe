$(document).ready(function() {

  var winCombinations = [ [0, 1, 2], [3, 4, 5], [6, 7, 8],
                        [0, 3, 6], [1, 4, 7], [2, 5, 8],
                        [0, 4, 8], [2, 4, 6] ];

  var moves = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  var counter = 1;

  var $gameCells = $('.cell');

  var makeMove = $($gameCells).one('click', function() {
    var moveIndex = this.id
    var playerMark = (counter % 2 === 0) ? 'o' : 'x';
    var playerMove = (counter % 2 === 0) ? 1 : 2;
    $("p").eq(moveIndex).text(playerMark);
    moves[this.id] = playerMove;
    counter++;
    testWinner();
    console.log(moveIndex, playerMove, playerMark);
  })
});

var testWinner = function() {
  var xIndexes = [];
  var oIndexes = [];
  var winCombos;

  for (j=0; j < xMoves.length; j++) {
    xMoves[j] = parseInt(xMoves[j]);
    xIndexes.push(xMoves[j]);
    console.log(xIndexes);
  }
  for (k=0; k < oMoves.length; k++) {
    oMoves[k] = parseInt(oMoves[k]);
    oIndexes.push(oMoves[k]);
    console.log(oIndexes);
  }
  for (i=0; i < winCombinations.length; i++) {
    winCombos = winCombinations[i];
  }

  function isXWinner(xIndexes, winCombos){
    console.log("isXWinner function firing");
    for (var i = 0; i < winCombos.length; i++) {
        if ($.inArray(xIndexes[i], winCombos) == -1) {
          console.log("x has not won yet");
          return false;
        } return true;
      }
    }

  function isOWinner(oIndexes, winCombos){
    console.log("isOWinner function firing");
    for(var i = 0; i < winCombos.length; i++) {
      console.log(winCombos[i]);
      if ($.inArray(winCombos[i], oIndexes) == -1) {
        console.log("o has not won yet");
        return false;
      } return true;
    }
  }
}




