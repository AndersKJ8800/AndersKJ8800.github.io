class Scene
{
  constructor()
  {
    this.isActive = false;
    this.background = img.placeholder;
    this.buttons = [];
  }

  draw()
  {
    image(this.background, 0, 0, RES_X, RES_Y);
    this.specificDraw();
    for (let i = 0; i < this.buttons.length; i++)
    {
      this.buttons[i].draw();
    }
  }

  specificDraw()
  {

  }



  keybind(key)
  {

  }

}
