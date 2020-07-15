var form ;
var title ; 
var gameState=0;
var brick1 ;
var brick=[];

function preload(){

}
function setup() {
  for (var i=1;i<=100;i=i+1){
    brick [i]= new Brick(i*100,200)
  }
 brick1=new Brick();
 

  createCanvas(displayWidth-25,displayHeight-25);
form=new Form();
}

function draw() {
  background("red");
  if (gameState===0){
    form.display();
  }
  if (gameState===1){
    brick1.display();
    for (var i=1;i<=100;i=i+1){
      brick [i].display();
    }
  }

}