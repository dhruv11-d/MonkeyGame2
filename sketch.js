
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup,ground
var score
var ground

function preload(){
  
  
  monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
  foodGroup = new Group()
  obstacleGroup = new Group()
  monkey = createSprite(200,320,10,10)
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  ground = createSprite(400,350,600,10);
  ground.velocityX = -4
}


function draw() {
  background("white")
  if (ground.x > 0){
    ground.x = ground.width/2
  }
  if (keyDown("space")){
    monkey.velocityY = -14
  }
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  spawnFood()
  spawnObstacles()
  score = Math.round(frameCount/5)
  text("Survival Time: " + score,20,20)
  drawSprites();
  
}

function spawnFood(){
  if (frameCount%70 === 0 ){
    food = createSprite(400,Math.round(random(100,200)),40,10);
    food.addImage("foodImage",bananaImage);
    food.scale = 0.1;
    food.velocityX = -5
    foodGroup.add(food)
    monkey.depth = food.depth + 1
  }  
}
function spawnObstacles(){
  if (frameCount % 70 === 0){
    obstacle = createSprite(400,350,10,10)
    obstacle.addImage("rock",obstaceImage)
    obstacle.velocityX = -5
    obstacleGroup.add(obstacle)
    obstacle.scale = 0.3
  }
}



