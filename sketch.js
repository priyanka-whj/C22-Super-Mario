
var platform;
var platformGroup;
var mario;

function preload()
{

}

function setup() 
{
  createCanvas(displayWidth, 700);
  var distanceX = 0;
  var gap;

  platformGroup = new Group();

  mario = new Player();

  for(var i=0; i<20; i=i+1)
  {
    platform = new Platform(distanceX); 
    platformGroup.add(platform.spt);
    gap = random([50, 60, 70, 80]);
    distanceX = distanceX + platform.sptw + gap;
  }
}

function draw() 
{
  background("skyblue");  
  translate(-mario.spt.x + width/2, 0, 0); 
  mario.applyGravity();
  mario.spt.collide(platformGroup);

  if(keyDown("right"))
  {
    mario.moveForward();
  }

  if(keyDown("left"))
  {
    mario.moveBackward();
  }

  if(keyDown("up"))
  {
    mario.jump();
  } 
  drawSprites();
}

