var mic, fft;
var analyzer;

function setup() {
   createCanvas(640,640);
   
   mic = new p5.AudioIn();
   mic.start();
   fft = new p5.FFT();
   fft.setInput(mic);
  
   // create a new Amplitude analyzer
  analyzer = new p5.Amplitude();

  // Patch the input to an volume analyzer
  analyzer.setInput(mic);
  
}

var ellipses = [];

function draw() {
  //colorMode(RGB,255,255,255,1);
  background(50);
     
  
   // Get the average (root mean square) amplitude
  var rms = analyzer.getLevel();
  // Draw an ellipse with size based on volume

  strokeWeight(2);
  stroke(255);
  noFill();
  ellipses.push({diam:rms*500,timestamp:millis()});

  for (var i = 0; i < ellipses.length; i++){
    var e = ellipses[i];
    // if current time - timestamps I was created is < 100
    // then I am still alive and should be drawn
    if (millis() - e.timestamp <100) {
      e.diam += e.diam/((millis()-e.timestamp)); //linear interpolation easing functions

      var d = Math.min(Math.min(width,height),e.diam); // constrain the ellipse within the screen bounds
      ellipse(width/2, height/2, d, d);      
    } else {
      // if I am dead, remove me from system memory
      ellipses.splice(i,1);
    }
    
  if (e.diam > width) {
    strokeWeight(6)
  }
  }
  
  var c = color(0,0,1,.5);
  fill(c);
  rect(0,0,width,height);
}