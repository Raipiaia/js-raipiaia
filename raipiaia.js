function setup() {
  createCanvas(600, 600);
  background("lightblue");
}

function draw() {
  stroke("lightgreen");
  fill("blue");
  
  if(mouseIsPressed){
    rect(mouseX, mouseY, 20,35);
  }
  
}
