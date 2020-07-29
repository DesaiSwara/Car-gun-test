var thickness,wall;
var bullet,speed, weight;


function setup() {
  createCanvas(1600,200);

  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83);

  car=createSprite(200,100,100,20);

  car.shapeColor=color(255);

  wall=createSprite(1335,100,thickness,height/2);    
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(0);    
  drawSprites();
}