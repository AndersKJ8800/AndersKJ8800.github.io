class Button
{
  constructor(string, x, y, width, height)
  {
    this.string = string;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw()
  {
    fill(255);
    stroke(0);
    strokeWeight(5);
    rect(this.x, this.y, this.width, this.height);
    textSize(30);
    strokeWeight(0);
    fill(0);
    text(this. string, this.x, this.y);
  }

  hitReg()
  {

  }
}
