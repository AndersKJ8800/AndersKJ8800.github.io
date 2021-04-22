class DialogBoxToLobby extends DialogBox
{
  constructor()
  {
    super(620, 300, "Er du sikker på at du vil\ngå tilbage til lobbyen?", 42, 80, [new Button("Ja", -150, 65, 270, 125), new Button("Nej", 150, 65, 270, 125)]);

    this.buttonsArr[0].effect = function()
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

      closeDialogBox();
      updateActiveScene(scene.lobby, "black", "medium");

    }

    this.buttonsArr[1].effect = function()
    {
      closeDialogBox();
      sound.dialogbox.tilbage.stop();
    }
  }


}
