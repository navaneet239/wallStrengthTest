var wall,thickness;

var bullet, speed, weight;


function setup() {
  createCanvas(windowWidth,400)

  thickness = random(22,83)

  speed = random(55,90);
  weight = random(400,1500);

  bullet = createSprite(50, 200, 50, 50);
  wall = createSprite(1200, 200, thickness, height/2);


}

function draw() {
  background(0);  

  bullet.velocityX = speed;

  //if (car.x - wall.x < wall.width/2 + car.width/2
   // && wall.x - car.x < wall.width/2 + car.width/2
   // && car.y - wall.y < wall.height/2 + car.height/2
   // && wall.y - car.y < wall.height/2 + car.height/2) {
   //     car.velocityX = 0
//}

  if (hasCollided(bullet,wall)){
    bullet.velocityX = 0;

    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
    
    if (damage > 10){
      wall.shapeColor = "red";
    }

    if(damage < 10){
      wall.shapeColor = "green";
    }

  }




  drawSprites();
}

function hasCollided (bullet, wall)
{

  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;

  if(bulletRightEdge >= wallLeftEdge){
    return true;
  }
  else{
    return false;
  }

}