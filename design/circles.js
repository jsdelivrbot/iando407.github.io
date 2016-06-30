var rVal;
var gVal;
var bVal;

function setup() {
    createCanvas(1280,720)
    rVal = 255;
    gVal = 0;
    bVal = 0;

}

function draw() {
    if (mouseIsPressed) {
        fill(color(rVal,gVal,bVal));
        stroke(color(rVal,gVal,bVal));
    } else {
        fill(255);
        stroke(255);
    }
    ellipse(mouseX, mouseY, 40, 40);
    rVal = (rVal + 250) % 256;
    gVal = (gVal + 4) % 256;
    bVal = (bVal + 2) % 256;
}