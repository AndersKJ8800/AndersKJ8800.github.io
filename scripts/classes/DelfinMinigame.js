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

    this.init = true;
    this.startSkærm = false;
    this.initMinigame = false;
    this.dl = null;
    this.inactivity =
    {
      doCounting: true,
      timer: 0
    };
    this.runMinigame = false;
    this.lives = 3;
    this.wins = 0;
    this.victory = false;
    this.gameOver = false;
    this.soundHasPlayed =
    {
      intro: null,
      vundet: null,
      tabt: null
    }

  }

  draw()
  {
    image(this.background, 0, 0, RES_X, RES_Y);

    skildpadde.draw("delfinspil");

    if (this.lives > 0) image(img.delfin.lives[this.lives - 1], 0, 0, RES_X, RES_Y);

    if (this.runMinigame && this.inactivity.doCounting)
    {
      this.inactivity.timer += deltaTime;
      if (this.inactivity.timer > hintCountdownTime)
      {
        this.inactivity.timer = 0;
        sound.dykkerens_kort.manglende_klik.play();
      }
    }

    if (this.init)
    {
      this.inactivity.timer = 0;
      this.inactivity.doCounting = true;

      this.lives = 3;
      this.wins = 0;
      this.soundHasPlayed.intro = false;
      this.soundHasPlayed.vundet = false;
      this.soundHasPlayed.tabt = false;

      this.init = false;
      this.startSkærm = true;
    }

    if (this.startSkærm)
    {

      // skilpadde speak
      if (!this.soundHasPlayed.intro && !sound.delfinbad.intro._playing && !sceneIsFading)
      {
        sound.delfinbad.intro.play();
        this.soundHasPlayed.intro = true;
      }

      // når speaken er færdig
      if (!sound.delfinbad.intro._playing && this.soundHasPlayed.intro)
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

      let str = this.target.toString() + " dl";

      if (this.dl == 10 && this.target == 2) str = "1/5";
      if (this.dl == 10 && this.target == 4) str = "2/5";
      if (this.dl == 10 && this.target == 5) str = "1/2";
      if (this.dl == 10 && this.target == 6) str = "3/5";
      if (this.dl == 10 && this.target == 8) str = "4/5";

      if (this.dl == 12 && this.target == 2) str = "1/6";
      if (this.dl == 12 && this.target == 4) str = "1/3";
      if (this.dl == 12 && this.target == 6) str = "1/2";
      if (this.dl == 12 && this.target == 8) str = "2/3";
      if (this.dl == 12 && this.target == 10) str = "5/6";

      if (this.dl == 15 && this.target == 5) str = "1/3";
      if (this.dl == 15 && this.target == 10) str = "2/3";
      if (this.dl == 15 && this.target == 3) str = "1/5";
      if (this.dl == 15 && this.target == 6) str = "2/5";
      if (this.dl == 15 && this.target == 9) str = "3/5";
      if (this.dl == 15 && this.target == 12) str = "4/5";


      text("Der skal " + str + " sæbe i denne beholder", 600, 400);

      let mX = mouseX / scaling;
      let mY = mouseY / scaling;

      if (this.dl == 10 && !this.dialogBoxes.tilbage.isActive)
      {
        if (mX > 550 * 5/3 && mX < 970 * 5/3)
        {

          if (mY > 400 * 5/3 && mY < 795 * 5/3)
          {
            this.userInput = (abs(ceil((mY - 417 * 5/3 - 362 * 5/3) / (40.2222 * 5/3) - 0.5)) + 1);
            let arrowPos =
            {
              x: [949, 947, 942, 936, 922, 899, 875, 874, 870, 872],
              y: [781, 730, 695, 654, 620, 583, 542, 501, 455, 413]
            }
            let x = arrowPos.x[this.userInput - 1] * (5/3);
            let y = arrowPos.y[this.userInput - 1] * (5/3);
            image(img.delfin.arrow, x, y - 42);
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
        if (mX > 550 * 5/3 && mX < 970 * 5/3)
        {

          if (mY > 410 * 5/3 && mY < 795 * 5/3)
          {
            this.userInput = (abs(ceil((mY - 417 * 5/3 - 350 * 5/3) / (28.857 * 5/3) - 0.5)) + 1);
            if (mY > 774 * 5/3) this.userInput = 1;
            if (mY < 450 * 5/3) this.userInput = 12;
            let arrowPos =
            {
              x: [951, 951, 944, 937, 931, 919, 900, 886, 874, 871, 867, 869],
              y: [783, 752, 711, 679, 653, 620, 591, 564, 532, 497, 469, 432]
            }
            let x = arrowPos.x[this.userInput - 1] * (5/3);
            let y = arrowPos.y[this.userInput - 1] * (5/3);
            image(img.delfin.arrow, x, y - 42);
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
        if (mX > 550 * 5/3 && mX < 970 * 5/3)
        {
          if (mY > 350 * 5/3 && mY < 843 * 5/3)
          {
            this.userInput = (abs(ceil((mY - 375 * 5/3 - 440 * 5/3) / (31.43 * 5/3) - 0.5)) + 1);
            if (mY > 800 * 5/3) this.userInput = 1;
            if (mY < 386 * 5/3) this.userInput = 15;
            let arrowPos =
            {
              x: [935, 951, 954, 946, 940, 933, 919, 900, 884, 871, 868, 867, 871, 869, 857],
              y: [820, 784, 752, 714, 682, 655, 620, 594, 565, 533, 503, 474, 431, 400, 371]
            }
            let x = arrowPos.x[this.userInput - 1] * 5/3;
            let y = arrowPos.y[this.userInput - 1] * 5/3;
            image(img.delfin.arrow, x, y - 42);
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
      minigamesWon.delfin = true;
      // skilpadde speak
      if (!this.soundHasPlayed.vundet && !sound.delfinbad.vundet._playing && !sceneIsFading)
      {
        sound.delfinbad.vundet.play();
        this.soundHasPlayed.vundet = true;
      }

      // når speaken er færdig
      if (!sound.delfinbad.vundet._playing && this.soundHasPlayed.vundet)
      {
        this.victory = false;
        this.init = true;
        scene.lobby.buttons.delfin.updateImg();
        updateActiveScene(scene.lobby, "black", "slow");
      }

    }

    if (this.gameOver)
    {
      // skilpadde speak
      if (!this.soundHasPlayed.tabt && !sound.delfinbad.tabt._playing && !sceneIsFading)
      {
        sound.delfinbad.tabt.play();
        this.soundHasPlayed.tabt = true;
      }

      // når speaken er færdig
      if (!sound.delfinbad.tabt._playing && this.soundHasPlayed.tabt)
      {
        this.init = true;
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
          this.wins++;
          if (this.wins < 5)
          {
            sound.rigtigt_svar.arr[ceil(random(0,6))-1].play();
            this.initMinigame = true;
          }
          else this.victory = true;
        }
        else
        {
          this.inactivity.doCounting = false;
          //print("forkert");
          this.lives--;
          if (this.lives < 1) this.gameOver = true;
          else
          {
            sound.forkert_svar.arr[ceil(random(0,3))-1].play();
            this.runMinigame = true;
          }
        }
      }
    }
  }

  keybind()
  {
    this.dialogBoxes.tilbage.isActive = true;
  }

}
