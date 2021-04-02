const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var Myengine, Myworld;
var box1 , box2;
var earth;

function setup(){
    var canvas = createCanvas(400,400);
    Myengine = Engine.create();
    Myworld = Myengine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,70);
    earth = new Ground(200,380,400,30);
}

function draw(){
    background(0);
    Engine.update(Myengine);
    box1.display();
    earth.display();
    box2.display();
   
}