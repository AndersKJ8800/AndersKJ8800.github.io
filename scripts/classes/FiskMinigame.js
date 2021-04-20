class FiskMinigame extends Scene
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
    this.background = img.background.fisk;

    this.lives = 3;
    this.inactivity =
    {
      timer: 0,
      doCounting: false
    }
    this.stage = "init";
    

  }

  draw()
  {
    image(this.background, 0, 0, RES_X, RES_Y);

    /*switch (this.stage)
    {

    }*/
    this[this.stage]();








    for (let i = 0; i < this.buttonsArr.length; i++)
    {
      this.buttons[this.buttonsArr[i][0]].draw();
    }
    for (let i = 0; i < this.dialogBoxesArr.length; i++)
    {
      this.dialogBoxes[this.dialogBoxesArr[i][0]].draw();
    }

  }

  init()
  {

    this.lives = 3;
    this.inactivity.timer = 0;

    this.stage = "startScreen";
  }

  startScreen()
  {
    // speak

    if (true)
    {
      this.stage = "initMinigame"
    }
  }

  initMinigame()
  {

  }

















  keybind()
  {
    this.dialogBoxes.tilbage.isActive = true;
  }

}
