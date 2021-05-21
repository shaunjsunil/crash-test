var car;
var wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  wall=createSprite(1400,200,60,height/2);
  car=createSprite(50, 200, 50, 50);
  
  speed=random(55,90);
  weight =random(400,1500);
  car.velocityX=speed;
}

function draw() {
  background("black");  
 // console.log(mouseX);
 if(wall.x-car.x<(wall.width+car.width)/2){
   car.velocityX=0;
   var deformation=0.5*weight *speed*speed/22509;
   if(deformation>180){
car.shapeColor=("red");

   }
   if(deformation<180 && deformation>100){
    car.shapeColor=("yellow");
   }
   if(deformation<100){
    car.shapeColor=("green"); 
   }

 }
  drawSprites();
}