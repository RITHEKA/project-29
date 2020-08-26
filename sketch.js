function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  ground = new ground (150, 305, 300, 170);
  stand = new ground(400, 200, 5, 50);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}