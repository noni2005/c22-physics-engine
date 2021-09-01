const Engine = Matter.Engine ; 
const World = Matter.World;
const Bodies=Matter.Bodies;
    
var engine,world,ball,ground;




function setup() {
 var canvas =  createCanvas(800,400);
 engine=Engine.create();
 world=engine.world;

 var ground_options={
   isStatic:true
 }
 ground=Bodies.rectangle(200,390,200,20,ground_options);
var ball_options={
  restitution:1.2
}

 ball=Bodies.circle(200,100,20,ball_options);
World.add(world,ground);
World.add(world,ball);
 // createSprite(400, 200, 50, 50);

}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  rectMode(CENTER)
rect(ground.position.x,ground.position.y,400,20);
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20);
  //drawSprites();
}