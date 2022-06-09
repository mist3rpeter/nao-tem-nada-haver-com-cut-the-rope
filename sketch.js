const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var corda;
var ninja;
var kimono;
var faca;


function preload(){
kimono= loadImage('melao.png')





}
function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,690,600,20);
 corda= new Rope(8,{x:250, y:10})
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
 ninja= Bodies.circle(250,250,20 )
 Matter.Composite.add(corda.body, ninja)
 link= new dam(corda,ninja)

faca= createImg('cut.png')
faca.position(220,15)
faca.size(50,50)
faca.mouseClicked(drop)
}

function draw() 
{
  background(51);
  ground.show();
  corda.show();
  image(kimono,ninja.position.x, ninja.position.y,85,85)
  Engine.update(engine);
  

 
}


function drop(){
corda.break(),
link.break(),
link=null



}



