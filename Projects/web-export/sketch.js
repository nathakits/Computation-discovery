var mic, fft;
var analyzer;

function setup() {
   createCanvas(600,600);
   background(50);
   
   mic = new p5.AudioIn();
   mic.start();
   fft = new p5.FFT();
   fft.setInput(mic);
   
   // create a new Amplitude analyzer
  analyzer = new p5.Amplitude();

  // Patch the input to an volume analyzer
  analyzer.setInput(mic);
}

function draw() {
  
   // Get the average (root mean square) amplitude
  var rms = analyzer.getLevel();

  // Draw an ellipse with size based on volume

  stroke(200);
  noFill();
  ellipse(width/2, height/2, 10+rms*1500, 10+rms*1500);
  
  var c = color(0,0,1,.5);
  fill(c);
  rect(0,0,width,height);
}

