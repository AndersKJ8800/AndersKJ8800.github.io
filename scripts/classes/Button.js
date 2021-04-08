class Button
{
  constructor(string, x, y, width, height)
  {
    this.string = string;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.strokeWeight = 5;
  }

  draw()
  {
    fill(color.buttonFill);
    stroke(color.buttonAccent);
    if (this.hovering)
    {
      fill(color.buttonFillDark);
      stroke(color.buttonAccentLight);
    }
    strokeWeight(this.strokeWeight);
    rect(this.x, this.y, this.width, this.height);
    textSize(30);
    strokeWeight(0);
    fill(0);
    text(this.string, this.x, this.y);
    this.hovering = false;
  }

  hitReg(hoverOrClick)
  {
    let leftBoundary = this.x - this.width / 2 - this.strokeWeight / 2;
    let rightBoundary = this.x + this.width / 2 + this.strokeWeight / 2;
    let upperBoundary = this.y - this.height / 2 - this.strokeWeight / 2;
    let lowerBoundary = this.y + this.height / 2 + this.strokeWeight / 2;

    if (mX >= leftBoundary && mX <= rightBoundary)
    {
      if (mY >= upperBoundary && mY <= lowerBoundary)
      {
        if (hoverOrClick == "click")
        {
          this.effect();
        }
        else if (hoverOrClick == "hover")
        {
          this.hovering = true;
          cursorType = "hover";
        }
        return true;
      }
      else { return false; }
    }
    else { return false; }
  }

  effect()
  {
    // bevidst tomt, skal tilpasses den enkelte knap
  }

}
