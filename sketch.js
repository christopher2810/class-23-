const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

function setup() {
  createCanvas(800,400);
  
  engine=Engine.create()
  world=engine.world;

 g1=new Ground(200,380,1000,20)
 b1=new Box(100,100,40,40)
b2=new Box(200,200,20,20)
  
}

function draw() {
  background("black");  
  Engine.update(engine)
 
  g1.display()
  b1.display()
  b2.display()
  
  drawSprites();
}