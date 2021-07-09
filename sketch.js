var bullet;
var wall;
var speed, weight, thickness;
var deformation;






function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness = random( 22, 83)
  bullet = createSprite(100, 200, 25, 10);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;
  wall = createSprite(1200,200, thickness, 200);
  wall.shapeColor = "darkGrey"
}

function draw() {
  background(0); 
  bulletIsTouching();
  drawSprites();
}

function bulletIsTouching()
{
  if(bullet.isTouching(wall)){
    bullet.collide(wall);
  }
  if((wall.x - bullet.x < wall.width/2 + bullet.width/2) &&
    (bullet.x - wall.x < wall.width/2 + bullet.width/2) && 
    (bullet.y - wall.y < wall.height/2 + bullet.height/2) &&
    (wall.y - bullet.y < wall.height/2 + bullet.height/2))
    {
        //bullet.velocityX = 0;
      deformation = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(deformation<10)
     {
      bullet.velocityX = 0;
      wall.shapeColor = "green";
     }
     if(deformation>10)
     {
      bullet.velocityX = 0;
      wall.shapeColor = "red";
     }

    }
}