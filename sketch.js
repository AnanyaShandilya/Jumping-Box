var canvas;
var music;

var block1, block2, block3, block4;

var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(0,799,100,20);
    block1.shapeColour = "pink";

    block2 = createSprite(200,799,100,20);
    block2.shapeColour = "yellow";

    block3 = createSprite(400,799,100,20);
    block3.shapeColour = "red";

    block4 = createSprite(600,799,100,20);
    block4.shapeColour = "orange";

    //create box sprite and give velocity  
    box = createSprite(random(20,750));
    box.shapeColour = white;
    box.velocityX = random(20,750);

    createSprites();

}

function draw() {
    background(black);
    //create edgeSprite
     createEdgeSprites(edges);

     box.bounceOff(edges);
     box.bounceOff(block1);
     box.bounceOff(block2);
     box.bounceOff(block3);
     box.bounceOff(block4);


    //add condition to check if box touching surface and make it box
    if(block1.isTouching(box) && box.bounceOff(block1)){
        box.shapeColour = "pink";
    } 

    if(block2.isTouching(box) && box.bounceOff(block2)){
        box.shapeColour = "yellow";
    }

    if(block3.isTouching(box) && box.bounceOff(block3)){
        box.shapeColour = "red";
    } 
    
    if(block4.isTouching(box) && box.bounceOff(block4)){
        box.shapeColour = "orange";
    } 

    drawSprites();
}
