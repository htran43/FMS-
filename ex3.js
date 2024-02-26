var ballSize = 50;
var score = 0;
var level1 = true;
var level2 = false;
var distToBall;
var radius1 = -150;
var radius2 = 150;

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
  y = Math.random() * 600;
  x = width;
}

function draw() {
  background(220);
  if(level1 == true) {
    levelOne();
  }
  else if(level2 == true) {
    levelTwo();
  }
  else if (level3 == true) {
    levelThree();
  }
}

function levelOne() {
  text("Level One", width / 2, height - 50);
  text("Score: " + score, 525, 50);
  arc(50, mouseY, 100, 100, radius1, radius2, PIE);
  ellipse(x, y, 50, 50);
  distToBall = dist(50, mouseY, x - 50, y);
  fill("green");
  if(distToBall > 30) {
    x = x-5;
    if(x < 0) {
      score -= 20;
      x = width;
      y = Math.random() * 600;
    }
  }
  else if(distToBall <= 30) {
    score += 10;
    x = width;
    y = Math.random() * 600;
  } 
  if(score > 100) {
    level1 = false;
    level2 = true;
    level3 = false;
  }
}

function levelTwo() {
  text("Level Two", width / 2, height - 50);
  text("Score: " + score, 525, 50);
  arc(50, mouseY, 100, 100, -150, 150, PIE);
  ellipse(x, y, 50, 50)
  distToBall = dist(50, mouseY, x - 50, y);
  fill("orange");
  if(distToBall > 30) {
    x = x-8;
    if(x < 0) {
      score -= 20;
      x = width;
      y = Math.random() * 600;
    }
  }
  else if(distToBall <= 30) {
    score += 10;
    x = width;
    y = Math.random() * 600;
  }
  if(score <= 100) {
    level1 = true;
    level2 = false;
    level3 = false;
  }
  else if(score > 200) {
    level1 = false;
    level2 = false;
    level3 = true;
  }
}

function levelThree() {
  text("Level Three", width / 2, height - 50);
  text("Score: " + score, 525, 50);
  arc(50, mouseY, 100, 100, -150, 150, PIE);
  ellipse(x, y, 50, 50);
  distToBall = dist(50, mouseY, x - 50, y);
  fill("red");
  if(distToBall > 30) {
    x = x-3;
    y = y - sin(frameCount*0.1) * random(1, 16);
    if(x < 0) {
      score -= 20;
      x = width;
      y = Math.random() * 600;
    }
  }
  else if(distToBall <= 30) {
    score += 10;
    x = width;
    y = Math.random() * 600;
  }
  if(score <= 200) {
    level1 = false;
    level2 = true;
    level3 = false;
  }
}



