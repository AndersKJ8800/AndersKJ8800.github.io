class ClickableElement
{
  constructor(imageArr, highlightImageArr, changeHitboxOnImgUpdate, imageHitbox)
  {
    this.imageArr = imageArr;
    this.imageVar = 0;
    this.image = this.imageArr[this.imageVar];
    this.highlightImageArr = highlightImageArr;
    this.highlightImageVar = 0;
    this.highlightImage = this.highlightImageArr[this.highlightImageVar];
    this.changeHitboxOnImgUpdate = changeHitboxOnImgUpdate;
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
    if (this.hovering) image(this.highlightImage, 0, 0, RES_X, RES_Y);
    image(this.image, 0, 0, RES_X, RES_Y);


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

  // kald denne funktion når et minigame er vundet
  updateImg()
  {
    this.imageVar = 1;
    this.image = this.imageArr[this.imageVar];
    this.highlightImage = this.highlightImageArr[this.imageVar];
    if (this.changeHitboxOnImgUpdate) this.hitboxImg = this.image;
  }
}
