function makeGrid() {
  // console.log()
  
  // Select size input
  
  var canvas, cell, height, width, rows;
  
  canvas = $('#pixel_canvas');
  height = $('#input_height').val();
  width = $('#input_width').val();
  
  canvas.children().remove()
  
  for (x = 0; x < height; x++) {
  canvas.append('<tr></tr>');
   }
  
  rows = $('tr');
  
  for (y = 0; y < width; y++) {
  rows.append('<td></td>');
  }   
  
  cell = canvas.find('td');
  
  // When td is clicked by the user, change color of td
  cell.click(function() {
    // Select color input
    // console.log();
    var color;
    color = $("#colorPicker").val();
    $(this).attr('bgcolor', color);
  });
  
}

// When size is submitted by the user, call makeGrid()
var submit;

submit = $('input[type="submit"]')

submit.click(function(event) {
  event.preventDefault();
  makeGrid();
});

