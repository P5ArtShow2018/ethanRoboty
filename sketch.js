function setup() {
  createCanvas(1000,1000)
  
}

function draw() {
  //frameRate (3);
  background(121,255,0)
  ellipse(mouseX,mouseY,mouseY,mouseX)
 stroke(mouseX,mouseY,255)
  fill(mouseX,mouseY,255);
  ellipse(random (0,1000),random (0,1000),random(1,1000))
  fill (300,255,135)
  //head
  fill(mouseX,mouseY,1)
  ellipse(500,129,150)
  //body
  fill(mouseX,mouseY,100)
  triangle(500,300,250,200,800,200)
  rect(475,300,60,100)
  rect(500,400,30,20)
  rect(470,400,30,20)
  rect(250,200,30,100)
  rect(790,210,30,100)
  
}