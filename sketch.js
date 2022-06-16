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
var kimono, fundo;
var faca;
var coelho;
var blink, eat, sad;

function preload(){
  kimono= loadImage('melao.png');
  fundo = loadImage("bkgd.png");

  blink = loadAnimation("blink_1.png","blink_2.png","blink_3.png");
  eat = loadAnimation("eat_0.png" , "eat_1.png","eat_2.png","eat_3.png","eat_4.png");
  sad = loadAnimation("sad_1.png","sad_2.png","sad_3.png");

}

function setup() {
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200,690,600,20);
  corda= new Rope(8,{x:250, y:10});
  ninja= Bodies.circle(250,250,20);
  Matter.Composite.add(corda.body, ninja);
  link= new dam(corda,ninja);

  faca= createImg('cut.png');
  faca.position(220,15);
  faca.size(50,50);
  faca.mouseClicked(drop);

  coelho = createSprite(250,600,20,20);
  coelho.addAnimation("blink",blink)
  coelho.scale=0.2

  rectMode(CENTER);
  ellipseMode(RADIUS);
  imageMode(CENTER);
  textSize(50);
}

function draw() {
  background(51);
  image (fundo,250,350,500,700)
 
  ground.show();
  corda.show();
  image(kimono,ninja.position.x, ninja.position.y,85,85);
 
  Engine.update(engine);
}


function drop(){
  corda.break();
  link.break();
  link=null;
}



