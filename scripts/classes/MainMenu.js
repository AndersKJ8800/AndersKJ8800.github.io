class MainMenu extends Scene
{
  constructor()
  {
    super();
    this.buttons =
    {
      test2: new Button("сука блять", RES_X / 2, RES_Y / 2, 200, 100),
      test: new Button("yo", RES_X / 2, RES_Y / 2, 100, 60),
      snegle: new ClickableElement(img.knækkede_snegle),
      delfin: new ClickableElement(img.olie_delfin)
    };
    this.buttonsArr = Object.entries(this.buttons);
    this.background = img.background;

    this.buttons["snegle"].effect = function()
    {
      updateActiveScene(scene.titleScreen);
    }
  }

  specificDraw()
  {
    textSize(100);
    fill(0,255,0);
    text("main", 400, 200);
  }

  keybind()
  {
    switch (key)
    {
      case "a":
        print("yo");
        break;
    }
  }

}
