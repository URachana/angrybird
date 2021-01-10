const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;

var myEngine, myWorld;
var ground;
function setup() {
  createCanvas(800,400);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  ground_options={
    isStatic :true
  }
  ground = Bodies.rectangle(400,380,800,30,ground_options);
  World.add(myWorld,ground);

  var render = Render.create({
    element: document.body,
    engine: myEngine,
    options:{
      width :800,
      height: 400,
      wireframes: false
    }
  });

  Render.run(render);
  console.log(ground);
  console.log(ground.type);
  console.log(ground.position.x);
  console.log(ground.position.y)
}

function draw() {
  background(255,255,255); 
  Engine.update(myEngine); 
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,30);
}