var snowflake,snowflakeImg;
var bgImg;
var boy, boyImg;
var bg;
var sound;
var bg1;

function preload() {
  snowflakeImg = loadImage("snow4.webp");
  bg= loadImage("snow2.jpg");
  //boyImg = loadImage("boy.jpg");
  bgImg = loadImage("snow3.jpg");
  sound = loadSound("Jingle Bells.mp3");
}
function setup() {
  createCanvas(800,400);
 
}

function draw() {
  if(bg){
  background(bg); 
}
  
 fill(255);
 textSize(15);
 text("Press Space To Start The Music And Change The Image", 50, 50);

  drawSprites();
  createSnowflake();
}

function createSnowflake(){
  if(frameCount%10===0){
  snowflake = createSprite(random(0,800), 0, 50, 50);
  snowflake.velocityY = 4;
  snowflake.addImage(snowflakeImg);
  snowflake.scale = 0.1;
  }
}

function keyPressed(){
  if(keyCode === 32){
    bg1 = createSprite(400, 180);
    bg1.addImage("bgImg",bgImg);
    bg1.scale = 0.8
    sound.play();
 }
}
 