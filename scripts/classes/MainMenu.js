class MainMenu extends Scene
{
  constructor()
  {
    super();
    this.buttons =
    [
      new Button("yo", 100, 400, 100, 60)
    ];
  }

  specificDraw()
  {
    textSize(100);
    fill(0,255,0);
    text("main", 400, 200);
  }

  keybind()
  {
    switch (key)
    {
      case "a":
        print("yo");
        break;
    }
  }

}
