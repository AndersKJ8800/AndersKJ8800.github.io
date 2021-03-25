class ClickableElement
{
  constructor(image)
  {
    this.image = image;
    this.hovering = false;
  }

  draw()
  {
    imageMode(CORNERS);
    if (this.hovering) blendMode(DIFFERENCE); //temp
    image(this.image, 0, 0, RES_X, RES_Y);
    blendMode(BLEND);
    imageMode(CORNER);
  }

  hitReg(hoverOrClick)
  {
    this.hovering = false;
    let x = round(this.image.width / RES_X * mX);
    let y = round(this.image.height / RES_Y * mY);
    if (this.image.get(x,y)[3] == 255)
    {

      if (hoverOrClick == "hover")
      {
        this.hovering = true;
      }
      if (hoverOrClick == "click")
      {
        this.effect();
      }
      return true;
    }
    return false;
  }

  effect()
  {
    updateActiveScene(scene.titleScreen);
    //blankt
  }
}
