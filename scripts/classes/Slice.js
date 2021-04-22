class Slice
{
  constructor(n)
  {
    this.image = img.fisk.styk[n];
    this.isActive = true;
    this.x = 0;
    this.y = 0;
    this.isHolding = false;
  }

  draw()
  {
    imageMode(CORNERS);
    image(this.image, this.x, this.y, RES_X + this.x, RES_Y + this.y);
    imageMode(CORNER);
  }

  hitReg()
  {
    let x = round(this.image.width / RES_X * mX) - this.x;
    let y = round(this.image.height / RES_Y * mY) - this.y;
    if (this.image.get(x,y)[3] == 255)
    {
      return true;
    }
    return false;
  }

}
