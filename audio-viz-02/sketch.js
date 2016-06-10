var mic;
var analyzer;

function setup() {
  createCanvas(640,640);

  mic = new p5.AudioIn();
  mic.start();

  // create a new Amplitude analyzer
  analyzer = new p5.Amplitude();

  // Patch the input to an volume analyzer
  analyzer.setInput(mic);

}

// global array to store ellipse objects 
var ellipses = [];

function draw() {
  //colorMode(RGB,255,255,255,1);
  background(50);
  noStroke();
  // Get the average (root mean square) amplitude
  var rms = analyzer.getLevel();
  // Draw an ellipse with size based on volume

  // strokeWeight(2);
  ellipses.push({diam:map(rms, 0, 1, 10, Math.min(width,height)-10),timestamp:millis()});

  for (var i = ellipses.length-1; i >= 0; i--){
    var e = ellipses[i];
    // if current time - timestamps I was created is < 100
    // then I am still alive and should be drawn
    if ((millis() - e.timestamp) < 100) {
      fill(255,100);
      ellipse(width/2, height/2, e.diam, e.diam); // draw ellipse at the center of the screen 

    } else {
      // if I am dead, remove me from system memory
      ellipses.splice(i,1);
    }

  }

  var c = color(0,0,1,.5);
  fill(c);
  rect(0,0,width,height);
}
