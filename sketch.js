var ob1,ob2,ob3,ob4,ob7,ob8,bg1,bg2,ob9,ob,pic1,pic2,pic3,pic4;
var yes,no,yes1,no1,yes2,no2;
function preload(){
  ob2 = loadImage("yellow-flowers-transparent-11.png")
  ob3 = loadImage("Screenshot 2021-02-02 195024.png")
  ob5 = loadImage("ziXobLE8T.png")
  bg1 = loadImage("6cr6xbnxi.png")
  ob9 = loadImage("1133665.png");
  pic1 = loadImage("8cGEd556i.png")
  yes1 = loadImage("Screenshot 2021-02-06 121221.png");
  no1 = loadImage("Screenshot 2021-02-06 121323.png");
  yes2 = loadImage("Screenshot 2021-02-06 122726.png")
  no2 = loadImage("Screenshot 2021-02-06 123227.png")
}

function setup() {
  createCanvas(1300,800)
  
  ob4 = createSprite(500,400,30,30)
  ob4.addImage("adding",ob3)
 
   ob1 = createSprite(400,560,30,30)
  ob1.addImage("adding",ob2)
  ob1.scale = 0.2
  ob6 = createSprite(470,550,30,30);
  ob6.addImage("adding",ob5)
  ob6.scale = 0.09
  ob = createSprite(530,550,30,30);
  ob.addImage("adding",ob9);
  ob.scale = 0.015

  pic2 = createSprite(580,560,30,30)
  pic2.addImage("adding",pic1);
  pic2.scale = 0.08;

  yes = createSprite(950,300,30,30);
  yes.addImage("adding",yes1);
  no = createSprite(1050,300,30,30);
  no.addImage("adding",no1);
textSize(30)
bg2 = createSprite(10,10,30,30);
bg2.addImage("adding",bg1)
bg2.scale = 0.024;
}
function draw() {
  background("white")
  spawnFlowers()
 
  spawnFlowers2();
  spwanFlowers3();
  spawnFlowers4()
 

  if(mousePressedOver(yes)){
    yes.addImage("adding",yes2);
    no.visible = false;
    no.destroy();
  }
  if(mousePressedOver(no)){
    no.addImage("adding",no2);
    yes.visible = false;
    yes.destroy()
  }
 drawSprites()
 textFont("Jokerman")
 fill("green")
 text("May coding bring you the flower shower that you've always wished!",50,80);
 fill("crimson");
 //stroke("crimson")
 text("Happy Coding!",400,130)
 textSize(20)
 text("Do you like coding?!",900,200);
 bg2.x = mouseX
 bg2.y = mouseY
 textSize(19)
 stroke("red")
/// textFont("century gothic")
 fill("red")
  if(frameCount<100){
    text("Press on any of them ->",150,550);
  }
}
function spawnFlowers(){
  if(mousePressedOver(ob1)){
    var flower = createSprite(random(0,1300),random(0,200),20,20);
    flower.addImage("adding",ob2);
    flower.velocityY = 3;
    flower.scale = 0.08
     var flower2 = createSprite(random(0,1300),random(0,200),20,20);
    flower2.addImage("adding",ob2);
    flower2.velocityY = 3;
    flower2.scale = 0.08
  }
}

function spawnFlowers2(){
    if(mousePressedOver(ob6)){
     var flower = createSprite(random(0,800),random(0,200),20,20);
     flower.addImage("adding",ob5);
    flower.velocityY = 3;
    flower.scale = 0.05
     var flower2 = createSprite(random(0,800),random(0,200),20,20);
    flower2.addImage("adding",ob5);
    flower2.velocityY = 3;
    flower2.scale = 0.05
}
}
function spwanFlowers3(){
    if(mousePressedOver(ob)){
        var flower = createSprite(random(0,800),random(0,200),20,20);
        flower.addImage("adding",ob9);
       flower.velocityY = 3;
       flower.scale = 0.01
        var flower2 = createSprite(random(0,800),random(0,200),20,20);
       flower2.addImage("adding",ob9);
       flower2.velocityY = 3;
       flower2.scale = 0.01
   }
}
function spawnFlowers4(){
    if(mousePressedOver(pic2)){
        var flower = createSprite(random(0,800),random(0,200),20,20);
        flower.addImage("adding",pic1);
       flower.velocityY = 3;
       flower.scale = 0.05
        var flower2 = createSprite(random(0,800),random(0,200),20,20);
       flower2.addImage("adding",pic1);
       flower2.velocityY = 3;
       flower2.scale = 0.05
    }
}
