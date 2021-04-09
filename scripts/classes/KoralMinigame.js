class KoralMinigame extends Scene
{
  constructor()
  {
    super();
    this.buttons =
    {

    };
    this.dialogBoxes =
    {
      tilbage: new DialogBoxToLobby()
    };
    this.buttonsArr = Object.entries(this.buttons);
    this.dialogBoxesArr = Object.entries(this.dialogBoxes);
    this.background = img.placeholder;

  }

  draw()
  {
    super.draw();
    textSize(100);
    fill(0,255,0);
    text("koral", 400, 200);
  }

  keybind()
  {
    this.dialogBoxes.tilbage.isActive = true;
  }

}
