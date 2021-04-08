class SnegleMinigame extends Scene
{
  constructor()
  {
    super();
    this.buttons =
    {

    };
    this.buttonsArr = Object.entries(this.buttons);
    this.background = img.background.sneglehuse;

  }

  draw()
  {
    super.draw();
    textSize(100);
    fill(0,255,0);
    text("snezzle", 400, 200);
  }

  keybind()
  {
    switch (key)
    {

    }
    updateActiveScene(scene.mainMenu, "black", "medium");
  }

}
