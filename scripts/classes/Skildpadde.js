class Skildpadde
{
  constructor()
  {
    this.img = img.skildpadde.def[0];
    this.imgMouth = img.skildpadde.def[1];
    this.mouthIsOpen = false;
    this.soundIsPlaying = false;
    this.arr = [];
  }


  draw(type)
  {
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

    this.soundIsPlaying = false;
    for (let i = 0; i < this.arr.length; i++)
    {
      if (this.arr[i]._playing) this.soundIsPlaying = true;
    }

    if (this.soundIsPlaying)
    {
      if (ceil(millis() / 300) % 2) this.mouthIsOpen = true;
      else this.mouthIsOpen = false;
    }
    else
    {
      this.mouthIsOpen = false;
    }

    if (typeof type == "undefined") type = "def";

    image(img.skildpadde[type][0],0,0,RES_X,RES_Y);
    if (this.mouthIsOpen) image(img.skildpadde[type][1],0,0,RES_X,RES_Y);

  }


}
