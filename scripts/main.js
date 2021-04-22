const RES_X = 2250;
const RES_Y = 1550;
let scaling = 1;
let scene;
let activeScene;
let mX;
let mY;
let cursorType = "normal";
let prevSceneImg;
let sceneIsFading = false;
let color =
{
  buttonAccent: [81, 126, 49],
  buttonAccentLight: [101, 148, 94],
  buttonFill: [212, 203, 139],
  buttonFillDark: [192, 184, 118]
}
let mouseIsDown = false;
let hintCountdownTime = 60000;
let skildpadde = null;

function setup()
{
  textFont("cursive");
  frameRate(60);
  angleMode(DEGREES);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  createCanvas(1,1);
  createScaledCanvas(RES_X, RES_Y);
  masterVolume(0.06);
  //music.default.play();
  skildpadde = new Skildpadde();
  scene =
  {
    titleScreen: new TitleScreen(),
    mainMenu: new MainMenu(),
    lobby: new Lobby(),
    snegleMinigame: new SnegleMinigame(),
    delfinMinigame: new DelfinMinigame(),
    dykkerMinigame: new DykkerMinigame(),
    koralMinigame: new KoralMinigame(),
    fiskMinigame: new FiskMinigame()
  }
  updateActiveScene(scene.titleScreen, null, null);
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
  if (!sceneIsFading) scene[activeScene].hitReg("hover");
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
  if (RES_Y * scaling >= mouseY && RES_X * scaling >= mouseX && mouseY >= 0 && mouseX >= 0) // hvis musen er indenfor spillets rammer
  {
    if (!sceneIsFading)
    {
      mX = mouseX / scaling;
      mY = mouseY / scaling;
      scene[activeScene].hitReg("click");
      scene[activeScene].mousebind();

      if (activeScene == "fiskMinigame" && scene.fiskMinigame.stage == "runMinigame")
      {
        scene.fiskMinigame.onMousePress();
      }
    }
  }

  mouseIsDown = true;
}

function mouseReleased()
{
  mouseIsDown = false;
}



// deaktiver context menu (højre klik)
document.addEventListener("contextmenu", function(e) {
  e.preventDefault();
});
