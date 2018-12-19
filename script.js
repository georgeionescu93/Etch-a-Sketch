function createGrid(x) {
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {
            $("#container").append("<div class='grid'></div>");
        };
    };
    $(".grid").width(960/x);
    $(".grid").height(960/x);
};

function clearGrid(){
    $(".grid").remove();
};  

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// function that prompts the user to select the number of boxes in a new grid
// the function then also creates that new grid
function refreshGrid(){
    var z = prompt("How many boxes per side?");
    clearGrid();
    createGrid(z);
};

$(document).ready(function() {
    createGrid(64);

    $(".grid").mouseover(function() {
        var color = '#'+Math.floor(Math.random()*16777215).toString(16);
    var colorString = '0px 0px 30px 0px ' + color;
    $(this).css('box-shadow');
    $(this).css('-webkit-box-shadow');
    $(this).css('-mox-box-shadow');
        $(this).css("background-color", getRandomColor());
        });

    $(".newGrid").click(function() {
        refreshGrid();

        $(".grid").mouseover(function() {
        $(this).css("background-color", getRandomColor());
        });
    });
});
