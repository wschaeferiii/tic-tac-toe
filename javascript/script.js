var winCombinations = [ [0, 1, 2], [3, 4, 5], [6, 7, 8],
                        [0, 3, 6], [1, 4, 7], [2, 5, 8],
                        [0, 4, 8], [2, 4, 6] ]


var moves = ['', '', '', '', '', '', '', '', '']

var counter = 0;

$(document).ready(function() {

  var $gameCells = $('.cell');

  var makeMove = $($gameCells).one('click', function() {
    counter++;
    var moveIndex = this.id
    moves[moveIndex] = (counter % 2) ? 'x' : 'o';
    console.log(moves, counter, moveIndex);
    $("p").eq(this.id).text(moves[moveIndex]);
  });

});

