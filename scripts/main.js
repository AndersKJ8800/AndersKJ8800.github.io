const RES_X = 2250;
const RES_Y = 1550;
let scaling = 1;
let scene;
let activeScene;
let mX;
let mY;
let cursorType = "normal";
let prevSceneImg;
let sceneIsFading;
let color =
{
  buttonAccent: [81, 126, 49],
  buttonAccentLight: [101, 148, 94],
  buttonFill: [212, 203, 139],
  buttonFillDark: [192, 184, 118]
}

function setup()
{
  textFont("cursive");
  frameRate(60);
  angleMode(DEGREES);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  createScaledCanvas(RES_X, RES_Y);
  masterVolume(0.1);
  scene =
  {
    mainMenu: new MainMenu(),
    lobby: new Lobby(),
    snegleMinigame: new SnegleMinigame(),
    delfinMinigame: new DelfinMinigame(),
    dykkerMinigame: new DykkerMinigame(),
    koralMinigame: new KoralMinigame()
  }
  updateActiveScene(scene.mainMenu, null, null);
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
  sceneFading();

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
    if (!sceneIsFading)
    {
      scene[activeScene].keybind(key);
    }
}

function mousePressed()
{
  if (!sceneIsFading)
  {
    mX = mouseX / scaling;
    mY = mouseY / scaling;
    scene[activeScene].hitReg("click");
  }
}

// deaktiver context menu (højre klik)
document.addEventListener("contextmenu", function(e) {
  e.preventDefault();
});
