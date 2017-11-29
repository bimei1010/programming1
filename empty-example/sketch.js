var r, g, b;
var sz = 10;


function setup(){
	createCanvas(400, 400);
    
}
function draw(){
	background("black");
    fill(r, g, b);
	ellipse(mouseX, mouseY, sz);
    if(sz > height){
        sz = 10;
    }
    
}

function mousePressed() {
	r = mouseX;
	g = mouseY;
	b = (mouseX + mouseY)/2;
    
    sz += 10;
    
}

   




