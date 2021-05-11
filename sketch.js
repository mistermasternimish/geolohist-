




const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

var engin,world;
var Hammer1, stone1, rubber1,ground;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	hammer1=new hammer(700,320,70,70);
    stone1=new hammer (500,320,70,70);
    rubber= new hammer (300,320,90,90);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  Engine.update(engine);

  Hammer.display();
  stone.display();
  rubber.display();


 
}



