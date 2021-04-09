class DialogBoxToMainMenu extends DialogBox
{
  constructor()
  {
    super(620, 300, "Er du sikker på at du vil\ngå tilbage til hovedmenuen?", 42, 80, [new Button("Ja", -150, 65, 270, 125), new Button("Nej", 150, 65, 270, 125)])

    this.buttonsArr[0].effect = function()
    {
      closeDialogBox();
      updateActiveScene(scene.mainMenu, "black", "slow");
    }

    this.buttonsArr[1].effect = function()
    {
      closeDialogBox();
    }
  }



}
