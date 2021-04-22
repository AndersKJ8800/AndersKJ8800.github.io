class ArrowBack extends ClickableElement
{
  constructor(dialogBox)
  {
    super([img.back, null], [null, null], null);
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

    let arr = [];
    arr = Object.values(sound);
    arr[2] = Object.values(sound.ved_klik_på_figur);
    arr[3] = Object.values(sound.sneglehuse);
    arr[4] = Object.values(sound.delfinbad);
    arr[5] = Object.values(sound.fiskemad);
    arr[6] = Object.values(sound.dykkerens_kort);
    arr[7] = Object.values(sound.koralrev);
    arr[8] = Object.values(sound.jokes);
    arr[9] = Object.values(sound.dialogbox);
    arr[11] = Object.values(sound.rigtigt_svar);
    arr[12] = Object.values(sound.forkert_svar);

    arr = arr.flat().flat();

    for (let i = 0; i < arr.length; i++)
    {
      if (arr[i]._playing) arr[i].stop();
    }


    if (typeof(this.dialogBox) == "undefined")
    {
      updateActiveScene(scene.titleScreen, "direct", "fast");
      scene.titleScreen.panDir = "up";
    }
    else
    {
      sound.dialogbox.tilbage.play();
      this.dialogBox.isActive = true;
    }

  }



}
