/*

  # Mohamed Elshorbagy
  # 05 / 07 / 2017
  # Spirals and BlackHole

*/ 

var a = -200; // scalling Factor of all shape 
var b = 1000; // Number of points 
var c = -6;
var i = 0;

var particles = [];
function setup() {

  createCanvas(400 , 400);
  colorMode(HSB);
  background(0);


}


function draw() {


  translate(width /2 , height /2);
  var r = a + b * pow(i , 1 / c);
  var x = r * cos(i);
  var y = r * sin(i); 
  stroke(i % 256, i % 360 , 125);
  noFill();
  strokeWeight(2);  
  point(x ,y);
  i++;


// Base Condition Like Recursion 
  if (i >= TWO_PI * b) {
    noLoop();

  }


}