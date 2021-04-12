class TitleScreen extends Scene
{
  constructor()
  {
    super();
    /*this.buttons = {};
    this.dialogBoxes = {};
    this.buttonsArr = Object.entries(this.buttons);
    this.dialogBoxesArr = Object.entries(this.dialogBoxes);*/
    this.background = img.background.title;
    this.backgroundCutout;
    this.maxYOffset = 5512;
    this.yOffset = 0;
    this.panTime = 0;
    this.panDir;
  }

  draw()
  {
    //super.draw();
    if (this.yOffset == this.maxYOffset && this.panDir == "down") updateActiveScene(scene.mainMenu, "direct", "fast");
    this.backgroundCutout = this.background.get(0, this.yOffset ,RES_X ,1688);
    angleMode(RADIANS);

    if (this.panDir == "down")
    {
      if (this.panTime < PI)
      {
        this.yOffset = (cos(this.panTime + PI) + 1) * this.maxYOffset / 2;
        this.panTime += deltaTime / 1000;
      }
      else
      {
        this.yOffset = this.maxYOffset;
        this.panTime = 0;
      }
    }

    if (this.panDir == "up")
    {
      if (this.panTime < PI)
      {
        this.yOffset = (cos(this.panTime) + 1) * this.maxYOffset / 2;
        this.panTime += deltaTime / 1000;
      }
      else
      {
        this.yOffset = 0;
        this.panTime = 0;
        this.panDir = null;
      }
    }

    image(this.backgroundCutout, 0, 0, RES_X, RES_Y)




    textSize(100);
    fill(0,255,0);
    text("title", 400, 200);
  }

  mousebind()
  {
    this.keybind();
  }

  keybind()
  {
    if (typeof(this.panDir) != "string")
    {
      this.panDir = "down";
    }
  }
}
