function setup() {
    createCanvas(400, 400);
    background("rgb(150,190,190)");
    text("Clique e arraste o mouse",10,10);
  }
  
  function draw() {
    noStroke();
    if(mouseIsPressed)
    {
      fill("blue");
    circle(mouseX,mouseY,10);
    }
  }