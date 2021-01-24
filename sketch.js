
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;




function setup() {
  var canvas = createCanvas(800,500);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,480,800,10)

  b1 = new Box(550,430,100,100)
  b2 = new Box(550,330,100,100)
  b3 = new Box(550,230,100,100)
  b4 = new Box(550,130,100,100)

  b5 = new Box(450,430,100,100)
  b6 = new Box(450,330,100,100)
  b7 = new Box(450,230,100,100)
  b8 = new Box(450,130,100,100)

  ball = new Ball(100,300,40)

  string = new Sling(ball.body,{x:250,y:50})

}

function draw() {
  background(0,0,0);  
  Engine.update(engine)

  ground.display()
  fill("white")
  b1.display()
  b2.display()
  b3.display()
  b4.display()
  b5.display()

  fill("white")
  b6.display()
  b7.display()
  b8.display()

  string.display()

  noStroke()
  ball.display()

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}