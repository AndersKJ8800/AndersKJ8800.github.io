class Lobby extends Scene
{
  constructor()
  {
    super();
    this.dialogBoxes =
    {
      tilbage: new DialogBoxToMainMenu()
    };
    this.dialogBoxesArr = Object.entries(this.dialogBoxes);
    this.buttons =
    {
      snegle: new ClickableElement([img.incomplete.snegle, img.complete.snegle], [img.incomplete.snegle_highlight, img.complete.snegle_highlight], true),
      delfin: new ClickableElement([img.incomplete.delfin, img.complete.delfin], [img.incomplete.delfin_highlight, img.complete.delfin_highlight], false),
      koraller: new ClickableElement([img.incomplete.koraller, img.complete.koraller], [img.incomplete.koraller_highlight, img.complete.koraller_highlight], true, hitboxImg.incomplete.koraller),
      dykker: new ClickableElement([img.incomplete.dykker, img.complete.dykker], [img.incomplete.dykker_highlight, img.complete.dykker_highlight], true),
      fisk: new ClickableElement([img.incomplete.fisk, img.complete.fisk], [img.incomplete.fisk_highlight, img.complete.fisk_highlight], true),
      tilbage: new ArrowBack(this.dialogBoxes.tilbage)
    };
    this.buttonsArr = Object.entries(this.buttons);
    this.background = img.background.default;

    this.buttons["snegle"].effect = function()
    {
      figurLyd();
      updateActiveScene(scene.snegleMinigame, "black", "slow");
    }
    this.buttons["delfin"].effect = function()
    {
      figurLyd();
      updateActiveScene(scene.delfinMinigame, "black", "slow");
    }
    this.buttons["koraller"].effect = function()
    {
      figurLyd();
      updateActiveScene(scene.koralMinigame, "black", "slow");
      scene.koralMinigame.stage = "init";
    }
    this.buttons["dykker"].effect = function()
    {
      figurLyd();
      updateActiveScene(scene.dykkerMinigame, "black", "slow");
    }
    this.buttons["fisk"].effect = function()
    {
      figurLyd();
      updateActiveScene(scene.fiskMinigame, "black", "slow");
    }

    this.introHasPlayed = false;

  }

  draw()
  {
    if (!this.introHasPlayed && !sceneIsFading)
    {
      sound.intro.play();
      this.introHasPlayed = true;
    }

    skildpadde.draw();

    allMinigamesWon = true;
    if (!minigamesWon.delfin) allMinigamesWon = false;
    if (!minigamesWon.dykker) allMinigamesWon = false;
    if (!minigamesWon.koral) allMinigamesWon = false;
    if (!minigamesWon.snegle) allMinigamesWon = false;
    if (!minigamesWon.fisk) allMinigamesWon = false;

    if (!sceneIsFading && allMinigamesWon && !victorySoundHasPlayed)
    {
      if (!sound.vundet_spil._playing)
      {
        sound.vundet_spil.play();
        music.stop();
        victorySoundHasPlayed = true;
      }
      if (!partyMusic._playing)
      {
        partyMusic.loop();
        partyMusic.setVolume(0.08);
      }
    }
    super.draw();
  }

  keybind()
  {
    this.dialogBoxes.tilbage.isActive = true;
  }


}

function figurLyd()
{
  sound.intro.stop();
  sound.ved_klik_på_figur.arr[ceil(random(0,3))-1].play();
}
