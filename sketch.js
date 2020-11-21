
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  
}


function draw() {
background(255);
  
  if(ground.x < 0){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY  = -12;
  }
  monkey.velocityY = monkey.velociityY + 0.8;
  
  monkey.collide("ground");
}

stroke("white");
textSize(20);
fill("white");
text("score: " + score , 500 , 50);


stroke("black");
textSize(20);
fill("black");
survivalTime = Math.ceil(frameCount/frameRate());
text("survivalTime: " + survivalTime , 100 , 50);

spawnFood();
spawnObstacles();

drawSprites();

function spawnFood() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var food = createSprite(600,120,40,10);
    Food.y = Math.round(random(120,200));
    Food.addImage(foodImage);
    Food.scale = 0.5;
    Food.velocityX = -3;
    
     //assign lifetime to the variable
    Food.lifetime = 200;
  
//adjust the depth
    Food.depth = ground.depth;
    ground.depth = ground.depth + 1;
    
    //add each cloud to the group
    foodGroup.add(Food);
  }
}