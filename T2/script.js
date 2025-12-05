function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255, 230, 240);

  
  noStroke();
  fill(210, 180, 160);
  ellipse(250, 250, 260, 230);

  
  ellipse(150, 140, 100, 100);
  ellipse(350, 140, 100, 100);

  
  fill(230, 200, 180);
  ellipse(150, 140, 55, 55);
  ellipse(350, 140, 55, 55);

  
  fill(70, 55, 45);
  ellipse(210, 230, 30, 30);
  ellipse(290, 230, 30, 30);

  
  ellipse(250, 265, 22, 18);

  
  stroke(70, 55, 45);
  strokeWeight(3);
  line(250, 272, 250, 290);
  line(250, 290, 235, 300);
  line(250, 290, 265, 300);

  
  noStroke();
  fill(255, 160, 180);
  ellipse(190, 260, 40, 25);
  ellipse(310, 260, 40, 25);
}