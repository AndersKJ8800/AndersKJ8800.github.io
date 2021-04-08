class TitleScreen extends Scene
{
  constructor()
  {
    super();
  }

  draw()
  {
    super.draw();
    textSize(100);
    fill(0,255,0);
    text("title", 400, 200);
  }

  keybind()
  {
    updateActiveScene(scene.mainMenu, "direct", "medium");
  }
}
