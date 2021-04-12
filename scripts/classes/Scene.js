class Scene
{
  constructor()
  {
    this.isActive = false;
    this.background = img.placeholder;
    this.buttons = {};
    this.buttonsArr = [];
    this.dialogBoxes = {};
    this.dialogBoxesArr = [];
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

  hitReg(hoverOrClick)
  {
    let continueHitreg = true;
    for (let i = this.dialogBoxesArr.length - 1; i >= 0; i--)
    {
      for (let j = this.dialogBoxesArr[i][1].buttonsArr.length - 1; j >= 0; j--)
      {
        if (this.dialogBoxes[this.dialogBoxesArr[i][0]].isActive)
        {
          continueHitreg = false;
          if (this.dialogBoxes[this.dialogBoxesArr[i][0]].buttonsArr[j].hitReg(hoverOrClick, this.dialogBoxes[this.dialogBoxesArr[i][0]].x, this.dialogBoxes[this.dialogBoxesArr[i][0]].y) == true)
          {
            break;
          }
        }

      }
    }
    if (continueHitreg)
    {
      for (let i = this.buttonsArr.length - 1; i >= 0; i--)
      {
        if (this.buttons[this.buttonsArr[i][0]].hitReg(hoverOrClick, 0, 0) == true) break;
      }
    }
  }

  mousebind(key)
  {
    
  }

  keybind(key)
  {

  }

}
