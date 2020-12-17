var speed,weight;
var bullet,wall,thickness;



function setup() {
  createCanvas(1200,400);
  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83)

  bullet=createSprite(50, 200, 70, 20);
  bullet.velocityX=speed;
  bullet.shapeColor=color(255)

  wall=createSprite(1150, 200, thickness, height/2);
  wall.shapeColor=color(80,80,80)
}

function draw() {
  background("black");
  
  if(wall.x-bullet.x<(bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
    var damage=(0.5 * weight * speed * speed)/(thickness*thickness*thickness)
    if(damage>10)
    {
      wall.shapeColor=color(255,0,0)
    }
    
    if(damage<10)
    {
      wall.shapeColor=color(0,255,0)
    }
  }
  drawSprites();
}