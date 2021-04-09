class Lobby extends Scene
{
  constructor()
  {
    super();
    this.buttons =
    {
      snegle: new ClickableElement(img.incomplete.snegle),
      delfin: new ClickableElement(img.incomplete.delfin),
      koraller: new ClickableElement(img.incomplete.koraller),
      dykker: new ClickableElement(img.incomplete.dykker)
    };
    this.dialogBoxes =
    {
      tilbage: new DialogBoxToMainMenu()
    };
    this.buttonsArr = Object.entries(this.buttons);
    this.dialogBoxesArr = Object.entries(this.dialogBoxes);
    this.background = img.background.default;

    this.buttons["snegle"].effect = function()
    {
      updateActiveScene(scene.snegleMinigame, "black", "slow");
    }
    this.buttons["delfin"].effect = function()
    {
      updateActiveScene(scene.delfinMinigame, "black", "slow");
    }
    this.buttons["koraller"].effect = function()
    {
      updateActiveScene(scene.koralMinigame, "black", "slow");
    }
    this.buttons["dykker"].effect = function()
    {
      updateActiveScene(scene.dykkerMinigame, "black", "slow");
    }

  }

  draw()
  {
    super.draw();
    textSize(100);
    fill(0,255,0);
    text("lobby", 400, 200);
  }

  keybind()
  {
    this.dialogBoxes.tilbage.isActive = true;
  }

}
