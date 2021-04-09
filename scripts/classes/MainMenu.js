class MainMenu extends Scene
{
  constructor()
  {
    super();
    this.buttons =
    {
      start: new Button("AAAAAAAAAAAA", RES_X / 2, RES_Y / 2, 400, 120),
    };
    this.dialogBoxes =
    {

    };
    this.buttonsArr = Object.entries(this.buttons);
    this.dialogBoxesArr = Object.entries(this.dialogBoxes);


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
    text("title", 400, 200);
  }

  keybind()
  {
    updateActiveScene(scene.lobby, "direct", "medium");
  }
}
