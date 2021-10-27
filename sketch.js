// list of resources

// star background
// https://editor.p5js.org/Volorf/sketches/bF6YDpH4g 
// major change: noLoop() removal to make the stars change
// https://p5js.org/reference/#/p5/createButton
// music: lesson 03


// stars' variables
let minSize = 0.5
let maxSize = 2
let minOpacity = 50
let maxOpacity = 200

// song variables
let analyzer

// image variables
let myImage = []
let i = 0

// button variable


function preload(){
  
  mySong = loadSound("./assets/You_spin_me_round_track.mp3");
  myImage[0] = loadImage("./assets/image_1.png");
  myImage[1] = loadImage("./assets/image_2.png");
  myImage[2] = loadImage("./assets/image_3.png");
  myImage[3] = loadImage("./assets/image_4.png");
  myImage[4] = loadImage("./assets/image_5.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(24);

  // analysis on sound file
  analyzer = new p5.Amplitude();
  analyzer.setInput(mySong); 
}


function draw() {

  background(33,23,70);

  // ellipse that moves with music
  let vol = analyzer.getLevel();
  noFill();
  stroke(255);
  strokeWeight(0.5);
  ellipse(windowWidth / 2, windowHeight / 2, 350 + vol * 100, 350 + vol * 100 );
 
  // text
  let myText1 = "let'sspin!";
  push();
  translate (windowWidth/2, windowHeight/2);
  drawingContext.font = "360px Satisfy";
  fill("#EDFF86");
  text(myText1, 0, 60)
  pop();

  let myText2 = "click to play music";
  drawingContext.font = "24px Bebas Neue";
  drawingContext.textAlign = "center";
  fill("#EDFF86");
  text(myText2, width/2, height/12)
 
  let myText3 = "use arrows or return to interact";
  drawingContext.font = "24px Bebas Neue";
  drawingContext.textAlign = "center";
  fill("#EDFF86");
  text(myText3, width/2, height/12*11)

  push();
  // image rotation 
  translate(width / 2, height / 2);
  angleMode(DEGREES);
  if (mouseX > width/2) {
    rotate(-frameCount * 10); // clockwise
  } else {
    rotate(frameCount * 10); // countercloclwise
  }
  // image positioning from center
  imageMode (CENTER);
  image(myImage[i], 0, 0, 250, 250);
  pop();

  // interact to change characters
  if  (keyIsDown (RIGHT_ARROW)) {
  i = 1;
  } 

  if  (keyIsDown (LEFT_ARROW)) {
  i = 2;
  } 

if  (keyIsDown (UP_ARROW)) {
  i = 3;
  } 
 
if  (keyIsDown (DOWN_ARROW)) {
  i = 4;
  } 

if  (keyIsDown (RETURN)) {
  i = 0;
  } 


  // stars' background and animation
  for (let i = 0; i < 100; i++) {
  let randomSize = random(minSize, maxSize)
  let randomX = random(width)
  let randomY = random(height)
  let opacity = map(randomSize, minSize, maxSize, minOpacity, maxOpacity)
  noStroke()
  fill(255,255,255,opacity)
  ellipse(randomX, randomY, randomSize, randomSize)   
  }


}


// to let music start
function mousePressed() {
  if (mySong.isPlaying()) {
    mySong.stop();
  } else {
    mySong.play();
    mySong.volume(0.3);
  }
}

