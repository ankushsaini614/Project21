var bullet, wall;

var speed, weight;
var thickness;




function setup() {
  createCanvas(2000,1000);
  speed = random(223,321);
  weight = random(30,52);

  bullet = createSprite(50,200,50,5);
  wall = createSprite(1200,200,60, thickness, height/2);

  bullet.velocityX = speed;
  bullet.shapeColor = "white"
  thickness = random(22,83);
}


function draw() {
  background("black");

  
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor = color(255,0,0); 
    }
    if(damage<10){
      wall.shapeColor = color(0,255,0);
    }
  }

  
  

  drawSprites();
}


function hasCollided(bullet1,wall1){
  var bulletRightEdge = bullet1.x+bullet1.width;
  var wallLeftEdge = wall1.x;

  if(bulletRightEdge >= wallLeftEdge){
    return true;

  }
  return false;
}
