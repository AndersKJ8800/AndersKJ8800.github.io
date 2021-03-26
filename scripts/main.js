const RES_X = 1920;
const RES_Y = 960;
let scaling = 1;
let scene;
let activeScene;
let mX;
let mY;
let cursorType = "normal";

function setup()
{
  frameRate(60);
  angleMode(DEGREES);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  createScaledCanvas(RES_X, RES_Y);
  masterVolume(0.1);
  scene =
  {
    titleScreen: new TitleScreen(),
    mainMenu: new MainMenu()
  }
  updateActiveScene(scene.titleScreen);
}

function windowResized()
{
  createScaledCanvas(RES_X, RES_Y);
}

function draw()
{
  cursorType = "normal";
  mX = mouseX / scaling;
  mY = mouseY / scaling;
  scene[activeScene].hitReg("hover");
  scale(scaling);
  drawScenes();

  // tegn cursor
  switch (cursorType)
  {
    case "normal": cursor("resources/images/cursor_normal.png"); break;
    case "hover": cursor("resources/images/cursor_hover.png"); break;
    default: cursor("resources/images/placeholder.png");
  }

}


function keyTyped()
{
  scene[activeScene].keybind(key);
}

function mousePressed()
{
  mX = mouseX / scaling;
  mY = mouseY / scaling;
  scene[activeScene].hitReg("click");
}
