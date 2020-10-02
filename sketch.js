var movingrect
var  fixedrect

function setup() {
  createCanvas(800,400);
  movingrect = createSprite(400, 200, 100, 50);
  fixedrect = createSprite(200, 200, 50, 100);
  movingrect.shapeColor = "green"
  fixedrect.shapeColor = "green"
}

function draw() {
  background(0,0,0);  
  movingrect.x = mouseX
  movingrect.y = mouseY

  if (isTouching(movingrect,fixedrect)){

    movingrect.shapeColor = "red"
    fixedrect.shapeColor = "red"

  }
else{

  movingrect.shapeColor = "green"
  fixedrect.shapeColor = "green"
  
}


  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x-object2.x < object1.width/2 + object2.width/2
    && object2.x - object1.x < object1.width/2+object2.width/2
    && object1.y-object2.y < object1.height/2 + object2.height/2
    && object2.y - object1.y < object1.height/2 + object2.height/2){

      return true
    }
  else {
    return false
  }


}