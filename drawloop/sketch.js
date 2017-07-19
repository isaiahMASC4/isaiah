function setup(){
    createCanvas(500,500);
    background(200);
    xSpeed = random(-6,6);
    ySpeed = random(-6,6);
    
}


var x = 250;
var y = 250;
var xSpeed;
var ySpeed;

function draw(){
    background(200);
    ellipse(x,y,30,30);
    if (x>=500){
        xSpeed = -1;
    }
    else if (x<=0) {
        xSpeed = 1;
    }
    
    if (y>=500){
        ySpeed = -1;
    }
    else if (y<=0) {
        ySpeed = 1;
    }
 
    
    x= x+xSpeed;
    y= y+ySpeed;
        
}

   


