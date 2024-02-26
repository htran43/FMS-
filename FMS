//Buttons
var audio1;
var audio2;
var audio3;
var background_3;
var startBtn;
//var optionBtn;
var leftBtn;
var rightBtn;
var returnBtn;
var backBtn;
var cOffset = 0;
var colorv = 0
var audioOn = false;

//MainMenu
var mode = 4
var hide = false
var mainMenuShow = true;
var gameOneActivated = false;
var gameThreeActivated = false;
var gameTwoActivated = false;

//Activity
var actOneShow = false
var actTwoShow = false
var actThreeShow = false

//Activity 1
const actOneLib = {
  ballx: 710,
  bally: 380,
  ballSize: 60,
  distToBall: 0,
  score: 0,
  levelNum: 1,
  level1Change: true,
  level2Change: false,
  level3Change: false,
}

const actTwoLib = {
  circleX: 800,
  circleY: 5,
  diameter: 50,
  level1Change: true,
  level2Change: false,
  level3Change: false,
}
const actThreeLib = {
  ballSize: 50,
  score: 0,
  level1: true,
  level2: false,
  level3: false,
  distToBall: 0,
  radius1: -150,
  radius2: 150,
  counterCheck: false,
  x: 650,
  y: 327.5,
  muti: Math.floor(Math.random() * (0.3 - 0.07)) + 0.07,
  amp: Math.floor(Math.random() * 16) + 1,
}

const textLib = {
  mainMenuTitle: function () {
    textSize()
    textAlign(CENTER, TOP)
    fill(255)
    text('FMS Improvement For Stroke Patients', window.innerWidth / 2, 70);
  },

  actOneTitle: function () {
    textSize(100);
    textAlign(CENTER, TOP);
    fill(255);
    text('Exercise 1:', window.innerWidth / 2 - 10, 20);
    textSize(75);
    text('Tracing Within A Boundary', window.innerWidth / 2 - 10, 150);
  },

  actTwoTitle: function () {
    textSize(100);
    fill(255);
    textAlign(CENTER, TOP);
    text('Exercise 2:', window.innerWidth / 2 - 10, 20);
    textSize(75);
    text('Clicking An Object', window.innerWidth / 2 - 10, 150)
  },

  actThreeTitle: function () {
    textSize(100);
    fill(255);
    textAlign(CENTER, TOP);
    text('Exercise 3:', window.innerWidth / 2 - 10, 20);
    textSize(75);
    text('Catching A Ball', window.innerWidth / 2 - 10, 150);
  },

  actOneSubTitle: function () {
    textSize(50);
    fill(255);
    text('Tracing Within A Boundary', window.innerWidth / 2 - 10, 20);
  },
  actTwoSubTitle: function () {
    textSize(50);
    fill(255);
    text('Clicking An Object', window.innerWidth / 2 - 10, 20);
  },
  actThreeSubTitle: function () {
    textSize(50);
    fill(255);
    text('Catching a Ball', window.innerWidth / 2 - 10, 20);
  }
};

const btnLib = {
  add: function () {
    audio1.play();
    mode += 1
    if (mode >= 5)
      mode = 1
    console.log(mode);
  },

  sub: function () {
    audio1.play();
    mode -= 1
    if (mode <= 0)
      mode = 4
    console.log(mode);
  },

  backBtnClicked: function () {
    audio2.play()
    background_3.pause();
    audioOn = false;
    mainMenuShow = true;
    backBtn.hide();
    hideBtn();
    actOneShow = false;
    actTwoShow = false;
    actThreeShow = false;
    gameOneActivated = false;
    gameThreeActivated = false;
    gameTwoActivated = false;
  },

  hideBtn: function () {
    if (hide == false) {
      hide = true
      startBtn.hide()
      //optionBtn.hide()
      leftBtn.hide()
      rightBtn.hide()

    } else if (hide == true) {
      hide = false
      startBtn.show()
      //optionBtn.show()
      leftBtn.show()
      rightBtn.show()
    }
  }
}

// This is the Main Menu Functions

function preload() {
  audio1 = loadSound("SoundArchive/Arrow_1.mp3");
  audio2 = loadSound("SoundArchive/Select_1.wav");
  audio3 = loadSound("SoundArchive/PmanEating_1.wav");
  background_3 = loadSound("SoundArchive/background_3.mp3");
}

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 20);
  startup();

  textLib.mainMenuTitle();
  textLib.actOneTitle();

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function startup() {
  // audio.play();
  // console.log(audio + "is playing");
  //Start Button

  textSize(20);
  startBtn = createButton("START");
  startBtn.position(window.innerWidth / 2 - 100, window.innerHeight / 2 +15);
  startBtn.size(100 * 2.3, 30 * 1.3);
  startBtn.style("background-color", color(50))
  startBtn.style("font-size", '20px')
  startBtn.style("color", color(100, 200, 20))
  startBtn.mousePressed(activityChooser);

  /*//Instructions Button
  optionBtn = createButton("");
  optionBtn.position(window.innerWidth / 2 - 100, window.innerHeight / 2 + 30);
  optionBtn.style("font-size", '20px')
  optionBtn.size(100 * 2.3, 30 * 1.3); */

  //Left Button 
  leftBtn = createButton("<");
  leftBtn.style("background-color", color(50))
  leftBtn.style("color", color(100, 200, 20))
  leftBtn.style("font-size", '40px')
  leftBtn.position(50, window.innerHeight / 2);
  leftBtn.size(65, 65);
  leftBtn.mousePressed(btnLib.sub);

  //Right Button
  textAlign(CENTER, CENTER)
  rightBtn = createButton(">");
  rightBtn.style("background-color", color(50))
  rightBtn.style("color", color(100, 200, 20))
  rightBtn.style("font-size", '40px')
  rightBtn.position(window.innerWidth - 105, window.innerHeight / 2 + 5);
  rightBtn.size(65, 65)
  rightBtn.mousePressed(btnLib.add);

  //Back Button
  backBtn = createButton("<- BACK ");
  backBtn.style("background-color", color(50));
  backBtn.style("color", color(0, 255, 0));
  backBtn.position(30, window.innerHeight - 70);
  backBtn.size(200, 30);
  backBtn.mousePressed(btnLib.backBtnClicked);
  backBtn.hide()
}

function draw() {

  background(color(20));
  //Changes the title when on the MAIN MENU
  if (mode == 1 && mainMenuShow == true) {
    textLib.actOneTitle();
  }
  if (mode == 2 && mainMenuShow == true) {
    textLib.actTwoTitle();
  }
  if (mode == 3 && mainMenuShow == true) {
    textLib.actThreeTitle();
  }
  if (mode == 4) {
    textLib.mainMenuTitle();
  }

  if (actOneShow) {
    backBtn.show();
    actThreeShow = false
    actTwoShow = false
    textLib.actOneSubTitle();
  }
  if (actTwoShow) {
    backBtn.show();
    actOneShow = false
    actThreeShow = false
    textLib.actTwoSubTitle();
  }
  if (actThreeShow) {
    backBtn.show();
    actOneShow = false
    actTwoShow = false
    textLib.actThreeSubTitle();
  }

  if (gameOneActivated == true) {
    actOne();
  }

  if (gameTwoActivated == true) {
    actTwo();
  }

  if (gameThreeActivated == true) {
    actThree();
    if (!audioOn) {
      background_3.loop();
      audioOn = true;
    }

  }
}




function rainbowRoad() {
  colorMode(HSB)
  for (let x = 0; x < width; x += 23) {
    let h = x / width * 360;
    fill(abs(h - cOffset) % 360, 100, 100);
    noStroke();
    rect(x - 15, window.innerHeight / 2 - 230, x + 400, 460);
  }
  cOffset -= 5;
} 

function actOne() {
  var r = rect(window.innerWidth / 2 - 310, window.innerHeight / 2 - 240, 650, 460, 20);
  //rect(420,200, 50,50) Reference (DONT TOUCH)

  if (actOneLib.level1Change == true) {
    actOnelevelOne();
  }
  if (actOneLib.level2Change == true) {
    actOnelevelTwo();
  }
  if (actOneLib.level3Change == true) {
    actOnelevelThree();
  }

  function actOnelevelOne() {
    fill("green");
    text("Level 1", width / 2, height - 75);
    actOneLib.distToBall = dist(actOneLib.ballx, actOneLib.bally, mouseX, mouseY)
    fill("white");
    text("Score: " + actOneLib.score, 150, 50);
    if (actOneLib.distToBall < actOneLib.ballSize / 2 && mouseIsPressed) {
      actOneLib.ballx = random(460, 961);
      actOneLib.bally = random(130, 501);
      actOneLib.score += 10;
      audio3.play();
      
    }
    fill('green');
    ellipse(actOneLib.ballx, actOneLib.bally, actOneLib.ballSize, actOneLib.ballSize);

    if (actOneLib.score >= (actOneLib.levelNum * 100)) { //Change Later
      actOneLib.level1Change = false;
      actOneLib.level2Change = true;
      actOneLib.level3Change = false;
      
    }
  }
  function actOnelevelTwo() {
    fill("yellow");
    text("Level 2", width / 2, height - 75);
    actOneLib.distToBall = dist(actOneLib.ballx, actOneLib.bally, mouseX, mouseY)
    fill("white");
    text("Score: " + actOneLib.score, 150, 50);

    if (actOneLib.distToBall < 20 && mouseIsPressed) {
      actOneLib.ballx = random(460, 961);
      actOneLib.bally = random(130, 501);
      actOneLib.score += 10;
      audio3.play();
      

    }
    fill('yellow');
    ellipse(actOneLib.ballx, actOneLib.bally, 40, 40);

    if (actOneLib.score >= (actOneLib.levelNum * 100)) {
      actOneLib.level1Change = false;
      actOneLib.level2Change = false;
      actOneLib.level3Change = true;
      actOneLib.levelNum++;

    }
  }
  function actOnelevelThree() {
    fill("red");
    text("Level 3", width / 2, height - 75);
    actOneLib.distToBall = dist(actOneLib.ballx, actOneLib.bally, mouseX, mouseY)
    fill("white");
    text("Score: " + actOneLib.score, 150, 50);
    if (actOneLib.distToBall < 10 && mouseIsPressed) {
      actOneLib.ballx = random(460, 961);
      actOneLib.bally = random(130, 501);
      actOneLib.score += 10;
      audio3.play();
      

    }
    fill('red');
    ellipse(actOneLib.ballx, actOneLib.bally, 20, 20);

    if (actOneLib.score >= (actOneLib.levelNum * 200)) {
      actOneLib.level1Change = true;
      actOneLib.level2Change = false;
      actOneLib.level3Change = false;
      actOneLib.levelNum++;
    }
  }
}

function actThree() {
  rainbowRoad();


  if (actThreeLib.level1 == true) {
    //rect(0, window.innerHeight/2 - 230, width, 460);
    actThreelevelOne();
  }
  else if (actThreeLib.level2 == true) {
    actThreelevelTwo();

  }
  else if (actThreeLib.level3 == true) {
    actThreelevelThree();

  }

  function actThreelevelOne() {
    let my = mouseY;
    fill("green");
    text("Level One", width / 2, height - 50);
    fill("white");
    text("Score: " + actThreeLib.score, 250, 80);
    fill("green");

    if (my <= 132)
      my = 132
    else if (my >= 493)
      my = 493
    else
      my = mouseY

    arc(50, my, 100, 100, actThreeLib.radius1, actThreeLib.radius2, PIE);
    fill("green");
    ellipse(actThreeLib.x, actThreeLib.y, 50, 50);
    actThreeLib.distToBall = dist(50, mouseY, actThreeLib.x - 50, actThreeLib.y);
    console.log(mouseY);


    if (actThreeLib.distToBall > 30) {
      actThreeLib.x -= 10;
      if (actThreeLib.x < 0) {
        actThreeLib.score -= 10;
        actThreeLib.x = width;
        actThreeLib.y = random(122, 534);
      }
    }
    else if (actThreeLib.distToBall <= 35) {
      audio3.play()
      actThreeLib.score += 10;
      actThreeLib.x = width;
      actThreeLib.y = random(122, 534);
    }
    if (actThreeLib.score > 100) {
      actThreeLib.level1 = false;
      actThreeLib.level2 = true;
      actThreeLib.level3 = false;
    }
  }

  function actThreelevelTwo() {
    let my = mouseY;
    fill("yellow");
    text("Level Two", width / 2, height - 50);
    fill("white");
    text("Score: " + actThreeLib.score, 250, 80);
    fill("yellow");
    if (my <= 132)
      my = 132
    else if (my >= 493)
      my = 493
    else
      my = mouseY
    arc(50, my, 100, 100, actThreeLib.radius1, actThreeLib.radius2, PIE);
    fill("yellow");
    ellipse(actThreeLib.x, actThreeLib.y, 50, 50)
    actThreeLib.distToBall = dist(50, mouseY, actThreeLib.x - 50, actThreeLib.y);

    if (actThreeLib.distToBall > 30) {
      actThreeLib.x -= 20;
      if (actThreeLib.x < 0) {
        actThreeLib.score -= 10;
        actThreeLib.x = width;
        actThreeLib.y = random(122, 534);
      }
    }
    else if (actThreeLib.distToBall <= 35) {
      audio3.play()
      actThreeLib.score += 10;
      actThreeLib.x = width;
      actThreeLib.y = random(122, 534);
    }
    if (actThreeLib.score <= 100) {
      actThreeLib.level1 = true;
      actThreeLib.level2 = false;
      actThreeLib.level3 = false;
    }
    else if (actThreeLib.score > 200) {
      actThreeLib.level1 = false;
      actThreeLib.level2 = false;
      actThreeLib.level3 = true;
    }
  }

  function actThreelevelThree() {
    let my = mouseY
    fill("red");
    text("Level Three", width / 2, height - 50);
    fill("white");
    text("Score: " + actThreeLib.score, 250, 0);
    fill("red");
    if (my <= 132)
      my = 132
    else if (my >= 493)
      my = 493
    else
      my = mouseY
    arc(50, my, 100, 100, -150, 150, PIE);
    fill("red");
    ellipse(actThreeLib.x, actThreeLib.y, 50, 50);
    actThreeLib.distToBall = dist(50, mouseY, actThreeLib.x - 50, actThreeLib.y);



    if (actThreeLib.distToBall > 30) {
      actThreeLib.x -= 10;

      actThreeLib.y = actThreeLib.y - sin(frameCount * 0.1) * random(1, 16);
      if (actThreeLib.x < 0) {
        actThreeLib.score -= 10;
        actThreeLib.x = width;
        actThreeLib.y = window.innerHeight / 2;

      }
    }
    else if (actThreeLib.distToBall <= 35) {
      audio3.play()
      actThreeLib.score += 10;
      actThreeLib.x = width;
      actThreeLib.y = window.innerHeight / 2;

    }
    if (actThreeLib.score <= 200) {
      actThreeLib.level1 = false;
      actThreeLib.level2 = true;
      actThreeLib.level3 = false;
    }
  }





}

function actTwo() {

  if (actTwoLib.level1Change == true) {
    actTwolevelOne();
  }
  if (actTwoLib.level2Change == true) {
    actTwolevelTwo();
  }
  if (actTwoLib.level3Change == true) {
    actTwolevelThree();
  }

  function actTwolevelOne() {
    fill("white");
    noStroke();
    rotate(0);
    fill("white");
    rect(50, 350, 1065, 10);
    rect(50, 270, 1065, 10);
    rect(1065, 130, 75, 350);
    fill("white");

    if (dist(actTwoLib.circleX, actTwoLib.circleY, mouseX, mouseY) < actTwoLib.diameter / 2 && mouseIsPressed) {
      fill("green");
      stroke("black");
      strokeWeight(2);
      actTwoLib.circleX = mouseX;
      actTwoLib.circleY = mouseY;
    }

    if (actTwoLib.circleY - 20 <= 270) {
      actTwoLib.circleX = 70;
      actTwoLib.circleY = 305;
    } else if (actTwoLib.circleY + 20 >= 350) {
      actTwoLib.circleX = 70;
      actTwoLib.circleY = 305;
    }
    if (actTwoLib.circleX + 25 >= 1050) {
      actTwoLib.level1Change = false;
      actTwoLib.level2Change = true;
      actTwoLib.level3Change = false;
      actTwoLib.circleX = 70;
      actTwoLib.circleY = 305;
      audio3.play();
    }

    ellipse(actTwoLib.circleX, actTwoLib.circleY, actTwoLib.diameter - 20, actTwoLib.diameter - 20);
    fill("green");
    strokeWeight(2);
    stroke("black");
    textSize(50);
    text("Level 1", 132, 212);

    fill("green");
    strokeWeight(2);
    stroke("black");
    textSize(75);
    translate(20, 10);
    rotate(PI / 2);
    text("FINISH", 300, -1112);
    

  }

  function actTwolevelTwo() {
    fill("white");
    noStroke();
    rotate(0);
    fill('white');
     rect(50, 350, 1065, 10);
    rect(50, 270, 1065, 10);
    rect(1065, 130, 75, 350);
    fill("white");

    if (dist(actTwoLib.circleX, actTwoLib.circleY, mouseX, mouseY) < actTwoLib.diameter / 2 && mouseIsPressed) {
      fill("yellow");
      stroke("black");
      strokeWeight(2);
      actTwoLib.circleX = mouseX;
      actTwoLib.circleY = mouseY;
    }

     if (actTwoLib.circleY - 20 <= 270) {
      actTwoLib.circleX = 70;
      actTwoLib.circleY = 305;
    } else if (actTwoLib.circleY + 20 >= 350) {
      actTwoLib.circleX = 70;
      actTwoLib.circleY = 305;
    }
    if (actTwoLib.circleX + 25 >= 1050) {
      actTwoLib.level1Change = false;
      actTwoLib.level2Change = false;
      actTwoLib.level3Change = true;
      actTwoLib.circleX = 70;
      actTwoLib.circleY = 305;
      audio3.play();
    }

    ellipse(actTwoLib.circleX, actTwoLib.circleY, actTwoLib.diameter - 10, actTwoLib.diameter - 10);
    fill("yellow");
    strokeWeight(2);
    stroke("black");
    textSize(50);
    text("Level 2", 132, 212);


    fill("yellow");
    strokeWeight(2);
    stroke("black");
    textSize(75);
    translate(20, 10);
    rotate(PI / 2);
    text("FINISH", 300, -1112);
    
  }

  function actTwolevelThree() {
   fill("white");
    noStroke();
    rotate(0);
    fill('white');
     rect(50, 350, 1065, 10);
    rect(50, 270, 1065, 10);
    rect(1065, 130, 75, 350);
    fill("white");

    if (dist(actTwoLib.circleX, actTwoLib.circleY, mouseX, mouseY) < actTwoLib.diameter / 2 && mouseIsPressed) {
      fill("red");
      stroke("black");
      strokeWeight(2);
      actTwoLib.circleX = mouseX;
      actTwoLib.circleY = mouseY;
    }

     if (actTwoLib.circleY - 20 <= 270) {
      actTwoLib.circleX = 70;
      actTwoLib.circleY = 305;
    } else if (actTwoLib.circleY + 20 >= 350) {
      actTwoLib.circleX = 70;
      actTwoLib.circleY = 305;
    }
    if (actTwoLib.circleX + 25 >= 1050) {
      actTwoLib.level1Change = true;
      actTwoLib.level2Change = false;
      actTwoLib.level3Change = false;
      actTwoLib.circleX = 70;
      actTwoLib.circleY = 305;
       audio3.play();
    }

    ellipse(actTwoLib.circleX, actTwoLib.circleY, actTwoLib.diameter, actTwoLib.diameter );
    fill("red");
    strokeWeight(2);
    stroke("black");
    textSize(50);
    text("Level 3", 132, 212);


    fill("red");
    strokeWeight(2);
    stroke("black");
    textSize(75);
    translate(20, 10);
    rotate(PI / 2);
    text("FINISH", 300, -1112);
    
  }
}
//Button Functions


function hideBtn() {
  if (hide == false) {
    hide = true
    startBtn.hide()
    //optionBtn.hide()
    leftBtn.hide()
    rightBtn.hide()


  } else if (hide == true) {
    hide = false
    startBtn.show()
    //optionBtn.show()
    leftBtn.show()
    rightBtn.show()
  }
}

/*
function backBtnClicked() {
  mainMenuShow = true;
  backBtn.hide();
  btnLib.hideBtn();
  actOneShow = false;
  actTwoShow = false;
  actThreeShow = false;
  gameOneActivated = false;
}

function sub() {
  mode -= 1
  if (mode <= 0)
    mode = 4
  console.log(mode);
}
function add() {
  mode += 1
  if (mode >= 5)
    mode = 1
  console.log(mode);
}
*/
function activityChooser() {

  audio2.play();
  console.log("working")
  if (mode != 4)
    mainMenuShow = false;

  if (mode == 1) {
    btnLib.hideBtn();
    textLib.actOneSubTitle();
    actOneShow = !actOneShow;
    console.log("Activity1 Activated");
    gameTwoActivated = true;
  } else if (mode == 2) {
    btnLib.hideBtn();
    textLib.actTwoSubTitle();
    actTwoShow = !actTwoShow;
    gameOneActivated = true;
    actOne();
    console.log("Activity2 Activated")
  } else if (mode == 3) {
    btnLib.hideBtn();
    textLib.actThreeSubTitle();
    actThreeShow = !actThreeShow;
    console.log("Activity3 Activated")
    gameThreeActivated = true;
    actThree();
  }
}
