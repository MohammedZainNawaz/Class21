var fixedRect, movingRect;
var food;
var man;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = false;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  man = createSprite(300,400,60,80)
  man.shapeColor = "green";
  man.debug = true;
  food =createSprite(400,400,90,100)
 food.shapeColor = "green";
 
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;



  if(isTouching(movingRect,man)){

    movingRect.shapeColor = "red";
    man.shapeColor = "red";
 
  }else{
    man.shapeColor = "green";
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
    food.shapeColor = "green";

  }
  drawSprites();
}



