var sun,
    mercury,
    venus,
    mars,
    earth,
    jupiter,
    saturn,
    uranus,
    neptune;
var sunImg, mercuryImg, venusImg, earthImg, marsImg, jupeterImg, saturnImg, uranusImg, neptuneImg;

var angle = 0;
var anglespeed = 0.2;
var sunRadius;

function preload() {
    sunImg = loadImage("sun.png");
    mercuryImg = loadImage("mercury.png");
    venusImg = loadImage("venus.png");
    earthImg = loadImage("earth.png");
    marsImg = loadImage("mars.png");
    jupiterImg = loadImage("jupiter.png");
    saturnImg = loadImage("saturn.jpg");
    uranusImg = loadImage("uranus.png");
    neptuneImg = loadImage("neptune.jpg");

}

function setup() {
    createCanvas(800, 800);
    sun = createSprite(0, 0);
    sun.addImage("sun", sunImg);
    sun.scale = 0.3;
    sun.setCollider("circle", -85, -60, 140);
    //sun.debug = true;

    mercury = createSprite(70, 50);
    mercury.addImage("mercury", mercuryImg);
    mercury.scale = 0.1;
    mercury.setCollider("circle", 0, 0, 300);
//mercury.debug = true;

    venus = createSprite(210, 60);
    venus.addImage("venus", venusImg);
    venus.scale = 0.15;
  //  venus.debug = true;

    earth = createSprite(150, -18);
    earth.addImage("earth", earthImg);
    earth.scale = 0.22;
   // earth.debug = true;

    mars = createSprite(30, 220);
    mars.addImage("mars", marsImg);
    mars.scale = 0.2;

    jupiter = createSprite(-180, 210);
    jupiter.addImage("jupiter", jupiterImg);
    jupiter.scale = 0.9;

    saturn = createSprite(340, -30);
    saturn.addImage("saturn", saturnImg);
    saturn.scale = 0.3;

    uranus = createSprite(220, 350);
    uranus.addImage("uranus", uranusImg);
    uranus.scale = 0.2;

    neptune = createSprite(-340, -320);
    neptune.addImage("neptune", neptuneImg);
    neptune.scale = 0.3;

}

function draw() {
    background(0);


    angleMode(DEGREES);
    translate(width / 2, height / 2);
    rotate(angle);

    if (sun.collide(mercury)) {
        mercury.destroy();
        //venus.destroy();
        //earth.destroy();
    }
    if (sun.collide(venus)) {
        //mercury.destroy();
         venus.destroy();
        //earth.destroy();
    }
    if (sun.collide(earth)) {
        //mercury.destroy();
        //venus.destroy();
        earth.destroy();
    }
    if (sun.collide(mars)) {
        //mercury.destroy();
        //venus.destroy();
        //earth.destroy();
        mars.destroy();
    }
    if (sun.collide(jupiter)) {
        //mercury.destroy();
        //venus.destroy();
        //earth.destroy();
        //mars.destroy();
        jupiter.destroy();
    }
    if (sun.collide(saturn)) {
        //mercury.destroy();
        //venus.destroy();
        //earth.destroy();
        saturn.destroy();
    }
    if (sun.collide(uranus)) {
        //mercury.destroy();
        //venus.destroy();
       // earth.destroy();
       uranus.destroy();
    }
    if (sun.collide(neptune)) {
        //mercury.destroy();
        //venus.destroy();
        //earth.destroy();
        neptune.destroy();
    }


    angle = angle + anglespeed;
    if (frameCount % 1 === 0) {
        sun.scale = sun.scale + 0.0000015;
    }
    drawSprites();
}