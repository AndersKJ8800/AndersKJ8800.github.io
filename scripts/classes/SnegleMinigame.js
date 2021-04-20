class SnegleMinigame extends Scene
{
  constructor()
  {
    super();
    this.dialogBoxes =
    {
      tilbage: new DialogBoxToLobby()
    };
    this.dialogBoxesArr = Object.entries(this.dialogBoxes);
    this.buttons =
    {
      tilbage: new ArrowBack(this.dialogBoxes.tilbage)
    };
    this.buttonsArr = Object.entries(this.buttons);
    this.background = img.background.sneglehuse;




  }

  draw()
  {
    image(this.background, 0, 0, RES_X, RES_Y);




















    for (let i = 0; i < this.buttonsArr.length; i++)
    {
      this.buttons[this.buttonsArr[i][0]].draw();
    }
    for (let i = 0; i < this.dialogBoxesArr.length; i++)
    {
      this.dialogBoxes[this.dialogBoxesArr[i][0]].draw();
    }

  }

  keybind()
  {
    this.dialogBoxes.tilbage.isActive = true;
  }

}
