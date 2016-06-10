
function setup() {
  createCanvas(500,500);
  background(175);
  // noStroke();
}

function draw() {
  var w = 25;
  var h = w;
  var step = width/9;

  for (var col = 0; col <= width; col+=(step*2)){
    beginShape(QUAD_STRIP);

    for (var row = 0; row <= height; row+=step){
      fill(255,255,255);
      ellipse(col,row,w,h);
      fill(255,0,0);
      ellipse(col-step,row,w,h);  
      noFill();
      vertex(col,row);
      vertex(col+step,row);
    }
    endShape();

  }

}