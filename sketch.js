var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;
var edges;
function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);
    surface1=createSprite(180,590,100,20);
    surface1.shapeColor="yellow";
    
    surface2=createSprite(360,590,100,20);
    surface2.shapeColor="green";

    surface3=createSprite(540,590,100,20);
    surface3.shapeColor="blue";

    surface4=createSprite(720,590,100,20);
    surface4.shapeColor="cyan";

    box=createSprite(180,500,20,20);
    box.shapeColor="white";
    box.velocityX=3;
    box.velocityY=4;
}

function draw() {
    background("black");
    edges=createEdgesSprites;
    box.bounceOff(surface4);
    box.bounceOff(surface3);
    box.bounceOff(surface2);
    box.bounceOff(surface1);
   
    drawSprites();
    
}
