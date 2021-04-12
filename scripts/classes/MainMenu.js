class MainMenu extends Scene
{
  constructor()
  {
    super();
    this.dialogBoxes =
    {

    };
    this.dialogBoxesArr = Object.entries(this.dialogBoxes);
    this.buttons =
    {
      start: new Button("AAAAAAAAAAAA", RES_X / 2, RES_Y / 2, 400, 120),
      back: new ArrowBack()
    };
    this.buttonsArr = Object.entries(this.buttons);

    this.background = img.background.default;

    this.buttons.start.effect = function()
    {
      updateActiveScene(scene.lobby, "black", "slow");
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
    
  }
}
