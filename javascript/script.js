$(document).ready(function() {

  var moves = ['', '', '', '', '', '', '', '', '']
  var counter = 0;

  var $gameCells = $('.cell');

  $($gameCells).one('click', function() {
    counter++;
    moves[this.id] = (counter % 2) ? 'x' : 'o';
    console.log(moves, counter);
  })

});

