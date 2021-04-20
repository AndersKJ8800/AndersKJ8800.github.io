class DialogBox
{
  constructor(width, height, text, textSize, yPosText, buttonsArr)
  {
    this.text = text;
    this.textSize = textSize;
    this.yPosText = yPosText;
    this.buttonsArr = buttonsArr;
    this.isActive = false;
    this.x = RES_X / 2;
    this.y = RES_Y / 2;
    this.width = width;
    this.height = height;
  }

  draw()
  {
    if (this.isActive)
    {
      translate(this.x, this.y);
      strokeWeight(6);
      stroke(color.buttonAccent);
      fill(color.buttonFill);
      rect(0, 0, this.width, this.height, 10);

      for (let i = 0; i < this.buttonsArr.length; i++)
      {
        this.buttonsArr[i].draw();
      }

      strokeWeight(0);
      fill(0);
      textAlign(CENTER);
      textSize(this.textSize);
      text(this.text, 0, this.yPosText - this.height / 2);


      translate(-this.x, -this.y);

    }
  }

}
