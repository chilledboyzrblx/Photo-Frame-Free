function preload(){

}

function setup(){
    canvas = createCanvas(540, 380);
    canvas.position(400, 150);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 540, 380);
    fill("#03cffc");
    circle(10, 10 , 50);
    circle(530, 10 , 50);
    circle(10, 370 , 50);
    circle(530, 370 , 50);
    fill("#ff3636");
    rect(33, 10, 475, 15);
    rect(33, 25, 15, 335);
    rect(33, 355, 475, 15);
    rect(495, 10, 15, 360);
}

function take_snapshot(){
    save('framed_image.png');
}