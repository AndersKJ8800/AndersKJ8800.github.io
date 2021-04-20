class DelfinMinigame extends Scene
{
  constructor()
  {
    super();
    this.dialogBoxes =
    {
      tilbage: new DialogBoxToLobby()
    };
    this.dialogBoxesArr = Object.entries(this.dialogBoxes);
    this.buttons =
    {
      tilbage: new ArrowBack(this.dialogBoxes.tilbage)
    };
    this.buttonsArr = Object.entries(this.buttons);
    this.background = img.background.delfin;

    this.startSkærm = true;
    this.initMinigame = false;
    this.dl = null;
    this.inactivity =
    {
      doCounting: true,
      time: 0
    };
    this.runMinigame = false;
    this.lives = 3;
    this.wins = 0;
    this.victory = false;
    this.gameOver = false;

  }

  draw()
  {
    image(this.background, 0, 0, RES_X, RES_Y);

    if (this.lives > 0) image(img.delfin.lives[this.lives - 1], 0, 0, RES_X, RES_Y);

    if (this.startSkærm)
    {
      this.lives = 3;
      this.wins = 0;
      // to do: skilpadde speak

      // når speaken er færdig
      if (true)
      {
        this.startSkærm = false;
        this.initMinigame = true;
      }
    }

    if (this.initMinigame)
    {
      this.dl = random([10, 12, 15]);
      this.target = ceil(random(2, this.dl));
      this.initMinigame = false;
      this.runMinigame = true;
    }

    if (this.runMinigame)
    {
      this.inactivity.time += deltaTime;
      if (this.inactivity.time > 60000)
      {
        // speak

        this.inactivity.time = 0;
      }


      let img1 = null;
      switch(this.dl)
      {
        case 10:
          img1 = img.delfin.dl10;
          break;
        case 12:
          img1 = img.delfin.dl12;
          break;
        case 15:
          img1 = img.delfin.dl15;
          break;
        default:
          print("AAAAAAAAAAAAA");
      }
      image(img1,0,0,RES_X,RES_Y);

      fill(255);
      textSize(60);
      text("der skal " + this.target + " dl sæbe i denne beholder", 600, 400);

      if (this.dl == 10 && !this.dialogBoxes.tilbage.isActive)
      {
        if (mouseX > 550 && mouseX < 970)
        {

          if (mouseY > 400 && mouseY < 795)
          {
            this.userInput = (abs(ceil((mouseY - 417 - 362) / 40.2222 - 0.5)) + 1);
            scale(1/scaling);
            let arrowPos =
            {
              x: [949, 947, 942, 936, 922, 899, 875, 874, 870, 872],
              y: [781, 730, 695, 654, 620, 583, 542, 501, 455, 413]
            }
            let x = arrowPos.x[this.userInput - 1];
            let y = arrowPos.y[this.userInput - 1];
            image(img.delfin.arrow, x, y - 20);
            scale(scaling);
          }
          else
          {
            this.userInput = null;
          }
        }
        else
        {
          this.userInput = null;
        }
      }

      if (this.dl == 12 && !this.dialogBoxes.tilbage.isActive)
      {
        if (mouseX > 550 && mouseX < 970)
        {

          if (mouseY > 410 && mouseY < 795)
          {
            this.userInput = (abs(ceil((mouseY - 417 - 350) / 28.857 - 0.5)) + 1);
            if (mouseY > 774) this.userInput = 1;
            if (mouseY < 450) this.userInput = 12;
            scale(1/scaling);
            let arrowPos =
            {
              x: [951, 951, 944, 937, 931, 919, 900, 886, 874, 871, 867, 869],
              y: [783, 752, 711, 679, 653, 620, 591, 564, 532, 497, 469, 432]
            }
            let x = arrowPos.x[this.userInput - 1];
            let y = arrowPos.y[this.userInput - 1];
            image(img.delfin.arrow, x, y - 20);
            scale(scaling);
          }
          else
          {
            this.userInput = null;
          }
        }
        else
        {
          this.userInput = null;
        }
      }

      if (this.dl == 15 && !this.dialogBoxes.tilbage.isActive)
      {
        if (mouseX > 550 && mouseX < 970)
        {

          if (mouseY > 350 && mouseY < 843)
          {
            this.userInput = (abs(ceil((mouseY - 375 - 440) / 31.43 - 0.5)) + 1);
            if (mouseY > 800) this.userInput = 1;
            if (mouseY < 386) this.userInput = 15;
            scale(1/scaling);
            let arrowPos =
            {
              x: [935, 951, 954, 946, 940, 933, 919, 900, 884, 871, 868, 867, 871, 869, 857],
              y: [820, 784, 752, 714, 682, 655, 620, 594, 565, 533, 503, 474, 431, 400, 371]
            }
            let x = arrowPos.x[this.userInput - 1];
            let y = arrowPos.y[this.userInput - 1];
            image(img.delfin.arrow, x, y - 20);
            scale(scaling);
          }
          else
          {
            this.userInput = null;
          }
        }
        else
        {
          this.userInput = null;
        }
      }

    }

    if (this.victory)
    {
      // speak

      // når speak er ovre
      if (true)
      {
        this.victory = false;
        this.startSkærm = true;
        updateActiveScene(scene.lobby, "black", "slow");
        scene.lobby.buttons.delfin.updateImg();
      }
    }

    if (this.gameOver)
    {
      // speak

      // når speak er ovre
      if (true)
      {
        this.startSkærm = true;
        this.gameOver = false;
        updateActiveScene(scene.lobby, "black", "slow");
      }
    }

    this.buttons.tilbage.draw();
    this.dialogBoxes.tilbage.draw();

  }

  mousebind()
  {
    if (typeof(this.userInput) == "number" && !this.dialogBoxes.tilbage.isActive)
    {
      if (this.runMinigame)
      {
        this.runMinigame = false;
        if (this.userInput == this.target)
        {
          this.inactivity.doCounting = false;
          print("rigtigt");
          this.wins++;
          if (this.wins < 5) this.initMinigame = true;
          else this.victory = true
        }
        else
        {
          this.inactivity.doCounting = false;
          print("forkert");
          this.lives--;
          if (this.lives < 1) this.gameOver = true;
          else this.initMinigame = true;
        }
      }
    }
  }

  keybind()
  {
    this.dialogBoxes.tilbage.isActive = true;
  }

}
