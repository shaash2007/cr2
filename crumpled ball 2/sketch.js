const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
}

function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

	ground1 = new ground(100, 390, 1000, 10);

	trash1 = new trash(650, 345, 10, 80);
	trash2 = new trash(750, 345, 10, 80);
	trash3 = new trash(700, 380, 90, 10);

	trash4 = new dustbin(700, 325, 20, 20);

	paper1 = new paper(50, 300, 10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  

  ground1.display();

  trash1.display();
  trash2.display();
  trash3.display();

  paper1.display();

  trash4.display();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x:15, y:-20})
	}
}


