var btn

function setup() {
  createCanvas(800, 800);
  background(255, 200, 200);
  btn = createButton ('Impresion');
  btn.position(0,0);
  btn.mousePressed(artemania);
}

function draw() {
  fill(100)
  circle(250, 250, 80);
  fill(random(0,255), 20, 20);
  triangle(mouseX, mouseY, mouseX+80, mouseY+80, mouseX-80, mouseY+80)
}

function artemania() {
  saveCanvas("imagen", "png")
}