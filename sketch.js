
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var ground,left,right;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

 engine = Engine.create();
 world = engine.world;

 ground = new Ground(width/2,670,width,20)
 left = new Ground(1100,600,20,120)
 right = new Ground(1200,600,20,120)

 var ball_options = {

 isStatic: false,
 restitution: 0.3,
 friction: 0,
 density:1.2

 }	

 Matter.Bodies.circle(20,30,30,30,ball_options);

 Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 ground.display();
 left.display();
 right.display();

  drawSprites();

}

 function keyPressed() {

 if (keyCode === UP_ARROW){

  Matter.Body.applyForce(ball,{x:0,y:0},{x:19,y:-0.4});
  }
 }

