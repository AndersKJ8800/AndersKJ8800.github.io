class Scene
{
  constructor()
  {
    this.isActive = false;
    this.background = img.placeholder;
  }

  draw()
  {
    image(this.background, 0, 0, RES_X, RES_Y);
    this.specificDraw();
  }

  specificDraw()
  {

  }



  keybind(key)
  {

  }

}
