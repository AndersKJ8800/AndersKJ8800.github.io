class MainMenu extends Scene
{
  constructor()
  {
    super();
    this.dialogBoxes =
    {

    };
    this.dialogBoxesArr = Object.entries(this.dialogBoxes);
    this.buttons =
    {
      start: new Button("Start", RES_X / 2, RES_Y / 2.2, 400, 120),
      slut: new Button("Slut", RES_X / 2, RES_Y / 1.7, 400, 120),
      //back: new ArrowBack()
    };
    this.buttonsArr = Object.entries(this.buttons);

    this.background = img.background.default;

    this.buttons.start.effect = function()
    {
      sound.start.stop()
      updateActiveScene(scene.lobby, "black", "slow");
    }

    this.buttons.slut.effect = function ()
    {
      noCanvas();
      this.arr = Object.values(sound);
      this.arr[2] = Object.values(sound.ved_klik_på_figur);
      this.arr[3] = Object.values(sound.sneglehuse);
      this.arr[4] = Object.values(sound.delfinbad);
      this.arr[5] = Object.values(sound.fiskemad);
      this.arr[6] = Object.values(sound.dykkerens_kort);
      this.arr[7] = Object.values(sound.koralrev);
      this.arr[8] = Object.values(sound.jokes);
      this.arr[9] = Object.values(sound.dialogbox);
      this.arr[11] = Object.values(sound.rigtigt_svar);
      this.arr[12] = Object.values(sound.forkert_svar);

      this.arr = this.arr.flat().flat();

      for (let i = 0; i < this.arr.length; i++)
      {
        this.arr[i].stop();
      }
    }

    this.startSoundHasPlayed = false;
  }

  draw()
  {
    super.draw();
    if (!this.startSoundHasPlayed)
    {
      sound.start.play();
      this.startSoundHasPlayed = true;
    }
  }

  keybind()
  {

  }
}
