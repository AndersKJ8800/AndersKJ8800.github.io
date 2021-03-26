class Scene
{
  constructor()
  {
    this.isActive = false;
    this.background = img.placeholder;
    this.buttons = {};
    this.buttonsArr = [];
  }

  draw()
  {
    image(this.background, 0, 0, RES_X, RES_Y);
    for (let i = 0; i < this.buttonsArr.length; i++)
    {
      this.buttons[this.buttonsArr[i][0]].draw();
    }
  }

  hitReg(hoverOrClick)
  {
    for (let i = this.buttonsArr.length - 1; i >= 0; i--)
    {
      if (this.buttons[this.buttonsArr[i][0]].hitReg(hoverOrClick) == true) break;
    }
  }


  keybind(key)
  {

  }

}
