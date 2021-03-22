const RES_X = 1920;
const RES_Y = 960;
let scaling = 1;
let scene;
let activeScene;

function setup()
{
  frameRate(60);
  angleMode(DEGREES);
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
  scale(scaling);
  background(255,0,255);
  drawScenes();
}


function keyTyped()
{
  scene[activeScene].keybind(key);
}
