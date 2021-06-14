const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var Gafus;
var Toqq;
var bgImage1;
var meteorGroup;
var cometGroup;
var starGroup;
var brickGroup;
var gameState=0;
var Start;
var Flag=false;
function preload(){
  bgImage1=loadImage("Images/WelcomBG.jpg");
  //loadAnimation
}
function setup() {
 createCanvas(displayWidth, displayHeight);
  Gafus=createSprite(20, 920, 30, 50)
  //addAnimation
  Toqq=createSprite(displayWidth/2, displayHeight-200);
  Start=createButton("PLAY");
  Start.position(displayWidth/2, displayHeight-100);
  starGroup = new Group();
  brickGroup = new Group();
  cometGroup = new Group();
}
function draw() {
  if(gameState===0){
    background(bgImage1);
    //Gafus(sprite) saying rules in beginning page
    Start.mousePressed(()=>{
      gameState=1;
      Start.hide();
    })
  }
  if(gameState===1){
    //first game level
    //different bg-rock planet

    if(Flag===false){
      spawnBricks();
    }
  }
  drawSprites();
}
function spawnBricks(){
  for(var i=1; i<=8; i++){
    brick=createSprite(i*50, random(100, displayHeight-500), 40, 20);
    brick.shapeColor="lightgreen";
    brickGroup.add(brick);
  }
  gBrick=createSprite(random(50, displayWidth-100), random(100, displayHeight-500), 40, 20)
  gBrick.shapeColor="gold";
  Flag=true;
}
