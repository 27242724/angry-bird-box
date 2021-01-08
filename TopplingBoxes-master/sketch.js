const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5,pig1,pig2,gr,log,log2,log3,log4,bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(800,160,70,70);
    ground = new Ground(600,height,1200,20);
    pig1 = new Pig(800,320);
    pig2 = new Pig(800,240);
    log = new Log(810,245,320,PI/2)
    log2 = new Log(810,175,320,PI/2)
    log3 = new Log(760,120,150,PI/7)
    log4 = new Log(870,120,150,-PI/7)
    bird = new Bird(100,100);
}

function draw(){
    background(51,255,255);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
}