var cols, rows;
var scl = 20;
var w = 600;
var h = 600;


function setup() {
  createCanvas(600,600);
  
  //600 / 20 = 30
  //30 rows and columns
  cols = w / scl;
  rows = h / scl;
}

function draw() {
  background(0);
  stroke(255);
  noFill();
  
  for (var y = 0; y < rows; y++) {
    beginShape(QUAD_STRIP);
  for (var x = 0; x <= cols; x++) {
    vertex(x*scl, y*scl);
    vertex(x*scl, (y+1)*scl);

    }
    endShape();
  }
}