function setup(){
    createCanvas(500,500);
    background(200);
}

function mouseDragged(){
    fill(random(255),random(255),random(255));
    ellipse(mouseX,mouseY,random(-200,200,),random(-200,200));
    rect(mouseX,mouseY,random(-200,200,),random(-200,200));
    //quad(mouseX,mouseY,random(-200,200,),random(-200,200));
    //triangle(mouseX,mouseY,random(-200,200,),random(-200,200));
}
