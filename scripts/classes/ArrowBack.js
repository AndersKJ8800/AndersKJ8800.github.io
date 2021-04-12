class ArrowBack extends ClickableElement
{
  constructor(dialogBox)
  {
    super(img.back);
    this.dialogBox = dialogBox;
  }

  draw()
  {
    imageMode(CORNERS);
    if (this.hovering) image(img.back_highlight, 0, 0, RES_X, RES_Y);
    image(this.image, 0, 0, RES_X, RES_Y);
    imageMode(CORNER);
  }

  effect()
  {
    if (typeof(this.dialogBox) == "undefined")
    {
      updateActiveScene(scene.titleScreen, "direct", "fast");
      scene.titleScreen.panDir = "up";
    }
    else
    {
      this.dialogBox.isActive = true;
    }

  }



}
