var bullet, wall;
var speed, weight, thickness;
var damage;

function setup() {
  createCanvas(1600,400);

  // Creating bullet sprite
  bullet = createSprite(100, 200, 50, 5);
  bullet.shapeColor = "white";

  // Creating random numbers for speed and weight of the bullet as well as the thickness of the wall
  speed = random(232, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  // Speed of the bullet is the same as the random number generated(speed)
  bullet.velocityX = speed;

  // Formula for the damage done on wall by the bullet
  damage = 0.5 * speed * speed * weight / (thickness * thickness * thickness);

  // Creating the wall sprite
  wall = createSprite(1200, 200, 60, height / 2);
  wall.shapeCOlor = (80, 80, 80);
}

function draw() {
  background("black");
  
  // console.log(damage);

  if (wall.x - bullet.x <= wall.width / 2 + bullet.width / 2){

    bullet.velocityX = 0;

    if (damage < 10){

      wall.shapeColor = "green";

    }

    else{
      
      wall.shapeColor = "red";
    }

  }

  drawSprites();
}