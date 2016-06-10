
function setup() {
  createCanvas(800,800);
  background(175);
  frameRate(60);
}

function draw() {
  var numLines = 100;
  var spacer = height/numLines;
  stroke(0);

  for (var i = 0; i < numLines; i++){
    // strokeWeight(i); // this would become black pretty quickly because space is only 10px
    line(0,spacer*i,width,spacer*i);  

  }
  // console.log("I am running at 60fps...");
}