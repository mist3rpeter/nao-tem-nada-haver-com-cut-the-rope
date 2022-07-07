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
var blink, eat, sad, link;

var bk_song;  // SOM DO BG
var cut_sound;  // SOM CORTANTO A CORDA
var sad_sound;  // SOM TRISTE
var eating_sound; // SOM COMENDO
var air;  /// SOM DO AR

function preload(){
  kimono= loadImage('melao.png');
  fundo = loadImage("bkgd.png");

  blink = loadAnimation("blink_1.png","blink_2.png","blink_3.png");
  eat = loadAnimation("eat_0.png" , "eat_1.png","eat_2.png","eat_3.png","eat_4.png");
  sad = loadAnimation("sad_1.png","sad_2.png","sad_3.png");

  bk_song = loadSound('sound1.mp3');
  sad_sound = loadSound("sad.wav");
  cut_sound = loadSound('rope_cut.mp3');
  eating_sound = loadSound('eating_sound.mp3');
  air = loadSound('air.wav');

  eat.looping= false;
  sad.looping= false;
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
  blink.frameDelay= 15
  eat.frameDelay= 15
  sad.frameDelay= 15
  coelho = createSprite(250,600,20,20);
  coelho.addAnimation("blink",blink)
  coelho.addAnimation("eat", eat)
  coelho.addAnimation("sad", sad)
  coelho.scale=0.2

  rectMode(CENTER);
  ellipseMode(RADIUS);
  imageMode(CENTER);
  textSize(50);

  //-*--
  blower = createImg('balloon.png');
  blower.position(10,250);
  blower.size(150,100);
  blower.mouseClicked(qdb);

  mute = createImg('mute.png');
  mute.position(400,125);
  mute.size(60,60);
  mute.mouseClicked(biblioteca);

}

function draw() {
  background(51);
  Engine.update(engine);
  image (fundo,250,350,500,700)
  drawSprites();
  ground.show();
  corda.show();
  if(ninja!= null){
   image(kimono,ninja.position.x, ninja.position.y,85,85);
  }
  if(newton(ninja, coelho)){
    coelho.changeAnimation('eat');
    eating_sound.play();

  }
 
  if(ninja!=null && ninja.position.y>=650) {
    coelho.changeAnimation('sad');
    bk_song.stop();
    ninja=null;
    sad_sound.play();
    sad_sound.setVolume(0.1);
  }
 
}

function newton(corpo1,corpo2){
  if(corpo1 != null){
    var d= dist(corpo1.position.x, corpo1.position.y, corpo2.position.x, corpo2.position.y)
  if(d<=80){
    World.remove(world, ninja)
    ninja=null
    return true
  }
  else{
    return false
  }
  }
}

function drop(){
  corda.break();
  link.break();
  link=null;
  cut_sound.play();
}

function qdb(){
Matter.Body.applyForce(ninja,{x:0,y:0},{x:0.03,y:0});
air.play();
air.setVolume(0.1)
}
function biblioteca(){
if(bk_song.isPlaying()){
bk_song.stop()

}
else{
bk_song.play()
bk_song.setVolume(0.1)


}


}