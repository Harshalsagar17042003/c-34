const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground;
var box,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var ball;
var rope;
var bgImg,sImg,mImg;

function preload(){

   bgImg=loadImage("Bg.png");
   //sImg=loadImage("S.png");
  // mImg=loadImage("M.png");

}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

    ground = new Ground(600,600,1200,20);
    platform = new Platform(1100,350,50,5);
    box = new Box(800, 01, 70, 70); 
    box1 = new Box(760, 70, 70, 70); 
    box2 = new Box(840, 70, 70, 70);
    box3 = new Box(710, 140, 70, 70);
    box4 = new Box(800, 140, 70, 70);
    box5 = new Box(890, 140, 70, 70);
    box6 = new Box(750, 210, 70, 70);
    box7 = new Box(850, 210, 70, 70); 
    box8 = new Box(700, 280, 70, 70);
    box9 = new Box(800, 280, 70, 70);
    box10 = new Box(900, 280, 70, 70);
    box11 = new Box(750, 350, 70, 70);
    box12 = new Box(850, 350, 70, 70);
    box13 = new Box(700, 420, 70, 70);
    box14 = new Box(800, 420, 70, 70);
    box15 = new Box(900, 420, 70, 70);
    box16 = new Box(750, 490, 70, 70);
    box17 = new Box(850, 490, 70, 70);
    box18 = new Box(700, 560, 70, 70);
    box19 = new Box(800, 560, 70, 70);
    box20 = new Box(900, 560, 70, 70);
    ball = new Ball(200,100,200);
    rope = new Rope(ball.body,{x:300,y:50});
    monster = new Monster(1100,100,300,300);
}

function draw() {

platform.display();

background(bgImg);

Engine.update(engine);

//ball.addImage("sImg");


ground.display();

box.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
ball.display();
rope.display();
monster.display();
}


function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  //}
}



