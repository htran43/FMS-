var ballx = 300;
var bally = 300;
var ballSize = 60;
var distToBall;
var score1 = 0;
var score2 = 0;
var score3 = 0;
var level1Change = true;
var level2Change = false;
var level3Change = false;

var counterCheck = false;

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
}

function draw() {
  background(220);

  if (level1Change == true) {
    levelOne();
  }
  if (level2Change == true) {
    levelTwo();
  }
  if (level3Change == true) {
    levelThree();
  }
}

function levelOne() {
  text("Level 1", width / 2, height - 20);
  distToBall = dist(ballx, bally, mouseX, mouseY);
  text("Score: " + score1, 50, 50);
  if (distToBall < ballSize / 2) {
    ballx = random(width - 100);
    bally = random(height - 100);
    score1 += 10;
  }
  fill("green");
  ellipse(ballx, bally, ballSize, ballSize);

  if (score1 >= 100) {
    level1Change = false;
    level2Change = true;
    level3Change = false;
    score1 = 0;
  }
}

function levelTwo() {
  text("Level 2", width / 2, height - 20);
  distToBall = dist(ballx, bally, mouseX, mouseY);
  text("Score: " + score2, 50, 50);
  if (distToBall < 20) {
    ballx = random(width - 100);
    bally = random(height - 100);
    score2 += 10;
  }
  fill("yellow");
  ellipse(ballx, bally, 40, 40);

  if (score2 >= 100) {
    level1Change = false;
    level2Change = false;
    level3Change = true;
    score2 = 0;
  }
}

function levelThree() {
  text("Level 3", width / 2, height - 20);
  distToBall = dist(ballx, bally, mouseX, mouseY);
  text("Score: " + score3, 50, 50);
  if (distToBall < 10) {
    ballx = random(width - 100);
    bally = random(height - 100);
    score3 += 10;
  }
  fill("red");
  ellipse(ballx, bally, 20, 20);

  if (score3 >= 100) {
    level1Change = true;
    level2Change = false;
    level3Change = false;
    score3 = 0;
  }
}
