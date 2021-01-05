
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	ground = new Ground(800,600,1600,20)
	dustbin1 = new Dustbin(1200, 590)
	
	paper = new Paper(200, 595, 25)
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground.display()
  paper.display()

  dustbin1.display()
  
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:145, y:-145})
	}
}



