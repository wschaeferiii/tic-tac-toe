$(document).ready(function() {

  var $gameCells = $('.cell');

  $($gameCells).one('click', function() {
    console.log("board clicked!!");
    console.log(this.id);


  })

});

