function preload(){

}

function setup(){
    canvas = createCanvas(800, 600);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 60, 40, 600, 440);

    fill(240, 240, 240);
    stroke(240, 240, 240);
    rect(645, 40, 30, 440);
    rect(60, 480, 600, 30);
    rect(60, 40, 600, 30);
    rect(60, 40, 30, 440);
    fill(0, 0, 0);
    stroke(0, 0, 0);
    circle(660, 480, 70);
    circle(660, 50, 70);
    circle(80, 50, 70);
    circle(80, 480, 70);

    tint(tint_color);
}

function take_snapshot(){
    save('natasha_bday_party.png')
}

tint_color = "grey";