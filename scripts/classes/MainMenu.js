class MainMenu extends Scene
{
  constructor()
  {
    super();
    this.buttons =
    {
      test2: new Button("сука блять", RES_X / 2, RES_Y / 2, 200, 100),
      test: new Button("yo", RES_X / 2, RES_Y / 2, 100, 60),
      snegle: new ClickableElement(img.incomplete.snegle),
      delfin: new ClickableElement(img.incomplete.delfin),
      koraller: new ClickableElement(img.incomplete.koraller),
      dykker: new ClickableElement(img.incomplete.dykker)
    };
    this.buttonsArr = Object.entries(this.buttons);
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
    text("main", 400, 200);
  }

  keybind()
  {
    switch (key)
    {

    }
    updateActiveScene(scene.titleScreen, "direct", "medium");
  }

}
