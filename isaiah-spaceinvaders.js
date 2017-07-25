function setup(){
    createCanvas(1200,1200);
    background(0);
}


var x = 525
var y = 1000
xSpeed = (+6);
ySpeed = (+6);


function draw(){
  background(0);
    fill(150,0,255)
  for (var j=0; j<3; j++){
         for(var i = 0; i<8; i++){
        rect(45+150*i,100+100*j,60,70);
    }
  }
    
    fill(255,0,0);
   if (keyIsDown(LEFT_ARROW))
    x-=5;

  if (keyIsDown(RIGHT_ARROW))
    x+=5;

  fill(0, 0, 255);
  rect(x,y,100,50)



  if (keyIsDown(DOWN_ARROW)


    

}
 
    
    
    
    
    
    

    

// var x1 = 530;
// var y1 = 1075;
// var x2 = 558;
// var y2 = 1020;
// var x3 = 586;
// var y3 = 1075;
    // triangle(530, 1075, 558, 1020, 586, 1075);