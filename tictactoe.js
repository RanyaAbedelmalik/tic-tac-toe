var currentPlayer = "X";
var nextPlayer = "O";

var playerXSelections = new Array();
var playerOSelections = new Array();


  handleClick = function(event) {
    var cell = event.target
    console.log(cell.id);
  }
  
  var cells = document.querySelectorAll("td");
  
  for(var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', handleClick)
  }
