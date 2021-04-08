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
  frameRate(60);
  angleMode(DEGREES);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  createScaledCanvas(RES_X, RES_Y);
  masterVolume(0.1);
  scene =
  {
    titleScreen: new TitleScreen(),
    mainMenu: new MainMenu(),
    snegleMinigame: new SnegleMinigame(),
    delfinMinigame: new DelfinMinigame(),
    dykkerMinigame: new DykkerMinigame(),
    koralMinigame: new KoralMinigame()
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
  scene[activeScene].hitReg("hover");
  scale(scaling);
  drawScenes();

  // tegn sidste scene under overgang
  if (sceneIsFading)
  {
    let alpha = 255 - round(((totalFadeTime - remainingFadeTime) / totalFadeTime) * 255);
    remainingFadeTime -= deltaTime;
    if (remainingFadeTime <= 0)
    {
      remainingFadeTime = 0;
      sceneIsFading = false;
    }
    if (sceneFadeType == "direct")
    {
      tint(255, alpha);
      image(prevSceneImg, 0, 0, RES_X, RES_Y);
    }
    if (sceneFadeType == "black")
    {
      if (alpha > 127)
      {
        image(prevSceneImg, 0, 0, RES_X, RES_Y);
        fill(0, 255 - (alpha - 128) * 2);
        rect(RES_X / 2, RES_Y / 2, RES_X, RES_Y);
      }
      else
      {
        fill(0, alpha * 2);
        rect(RES_X / 2, RES_Y / 2, RES_X, RES_Y);
      }
    }
    noTint();
  }

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
