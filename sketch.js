var thickness,wall;
var bullet,speed, weight;


function setup() {
  createCanvas(1600,200);

  speed=random(223,321);
  weight=random(30,152);
  thickness=random(22,83);

  car=createSprite(200,100,100,20);
  car.velocityX=speed;
  car.shapeColor=color(255);

  wall=createSprite(1335,100,thickness,height/2);    
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(0); 
  hasCollided();
  drawSprites();
}

function hasCollided (lbullet,lwall) {
  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge=lwall.x;

  if (bulletRightEdge >= wallLeftEdge) {
    return true;
  }
  return false;
}

if (hasCollided) {
  bullet.velocityX=0;
  var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
}

if (damage > 10) {
  wall.shapeColor=color(255,0,0);
}

if (damage < 10) {
  wall.shapeColor=color(0,255,0);
}