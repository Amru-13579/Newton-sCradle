var bob1,bob2,bob3,bob4,bob5,roof,rope1,rope2,rope3,rope4,rope5;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

bob1 = new Bob(100,500);
bob2 = new Bob(130,500);
bob3 = new Bob(160,500);
bob4 = new Bob(190,500);
bob5 = new Bob(210,500);

roof = new Roof(400,250,300,50);

rope1 = new Rope(bob1.body, roof.body,-100, 0);
rope2 = new Rope(bob2.body, roof.body,-50, 0);
rope3 = new Rope(bob3.body, roof.body,0,0);
rope4 = new Rope(bob4.body, roof.body,50,0);
rope5 = new Rope(bob5.body, roof.body,100, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
 rope3.display();
rope4.display();
 rope5.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === LEFT_ARROW){
		Matter.Body.applyForce (bob1.body,bob1.body.position,{x:-50,y:-50});
	}
}




