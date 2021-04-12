class ClickableElement
{
  constructor(image, imageHitbox)
  {
    this.image = image;
    this.hovering = false;
    this.hitboxImg = this.image;

    if (typeof(imageHitbox) != "undefined")
    {
      this.hitboxImg = imageHitbox;
    }
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
    let x = round(this.hitboxImg.width / RES_X * mX);
    let y = round(this.hitboxImg.height / RES_Y * mY);
    if (this.hitboxImg.get(x,y)[3] == 255)
    {
      if (hoverOrClick == "hover")
      {
        this.hovering = true;
        cursorType = "hover";
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
    //blankt
    print("knap mangler effekt");
  }
}
