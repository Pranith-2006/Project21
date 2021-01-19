var canvas;
var music;
var surf1,surf2,surf3,surf4,box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,400);

    //create 4 different surfaces
    surf1 = createSprite(100,390,200,15);
    surf1.shapeColor = "blue";
    surf2 = createSprite(310,390,200,15);
    surf2.shapeColor = "orange";
    surf3 = createSprite(520,390,200,15);
    surf3.shapeColor = "pink";
    surf4 = createSprite(730,390,200,15);
    surf4.shapeColor = "green";
   
    edges = createEdgeSprites();

    //create box sprite and give velocity
    box = createSprite(random(20,750));
    box.scale=0.2;
    box.shapeColor="white";
    box.velocityY=3;
    box.velocityX=3;
    
}

function draw() {
    background("black");
   
    box.bounceOff(edges);
    if(surf1.isTouching(box) && box.bounceOff(surf1)){
      box.shapeColor= "blue";
      box.velocityX=0;
      box.velocityY=0;
    }
    
    if(surf2.isTouching(box) && box.bounceOff(surf2)){
        box.shapeColor= "yellow";
        box.velocityX=0;
        box.velocityY=0;
        music.stop();
    }
    
    if(surf3.isTouching(box) && box.bounceOff(surf3)){
        box.shapeColor= "pink";
        box.velocityX=0;
        box.velocityY=0;
    }
    
    if(surf4.isTouching(box) && box.bounceOff(surf4)){
        box.shapeColor= "green";
        box.velocityX=0;
        box.velocityY=0;
    }
    
    




    //add condition to check if box touching surface and make it box
    drawSprites();
}
