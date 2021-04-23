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
    this.panSpeed = 1.5;
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
        this.panTime += deltaTime / 1000 * this.panSpeed;
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
        this.panTime += deltaTime / 1000 * this.panSpeed;
      }
      else
      {
        this.yOffset = 0;
        this.panTime = 0;
        this.panDir = null;
      }
    }

    image(this.backgroundCutout, 0, 0, RES_X, RES_Y)

    push();
    textSize(200);
    colorMode(HSB);
    fill((millis() / 5) % 360, 100, 100);
    textAlign(CENTER, CENTER);
    stroke(255);
    strokeWeight(20);
    text("Matlantis", RES_X / 2, RES_Y / 2 - (this.yOffset * 1.2));
    colorMode(RGB);
    pop();

    push();
    stroke(0);
    fill(255);
    strokeWeight(6);
    textSize(50);
    if (ceil(millis() / 800) % 2 == 1)
    {
      text("Tryk på skærmen for at gå videre", RES_X / 2, RES_Y / 1.4 - (this.yOffset * 1.2));
    }
    pop();

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
