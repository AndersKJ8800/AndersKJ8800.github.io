class SnegleMinigame extends Scene
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
    this.background = img.background.sneglehuse;

    this.stage = "init";
    this.lives;
    this.wins;
    this.brikker;
    this.brikkerPrSneglehus;
    this.inactivity =
    {
      timer: null,
      doCounting: null
    }
    this.brikArr = [];
    this.userInput;

    this.soundHasPlayed =
    {
      intro: null,
      vundet: null,
      tabt: null,
    }

  }

  init()
  {
    this.lives = 3;
    this.wins = 0;
    this.brikkerPrSneglehus = random([3,4,5]);
    this.inactivity.timer = 0;
    this.inactivity.doCounting = false;
    this.userInput = 1;

    this.soundHasPlayed.intro = false;
    this.soundHasPlayed.vundet = false;
    this.soundHasPlayed.tabt = false;

    this.stage = "startSkærm";
  }

  startSkærm()
  {
    // skilpadde speak
    if (!this.soundHasPlayed.intro && !sound.sneglehuse.intro._playing && !sceneIsFading)
    {
      sound.sneglehuse.intro.play();
      this.soundHasPlayed.intro = true;
    }

    // når speaken er færdig
    if (!sound.sneglehuse.intro._playing && this.soundHasPlayed.intro)
    {
      this.stage = "initMinigame";
    }
  }

  initMinigame()
  {
    this.brikker = ceil(random(this.brikkerPrSneglehus * 2.1, 16));

    this.xPosArr = [1283,1510,1750,2015,1212,1459,1743,2059,1921,1663,1415,1167,1549,1767,1965,2140];
    this.yPosArr = [1272,1299,1341,1269,1089,1083,1116,1047,904,893,878,888,714,708,719,801];

    this.brikArr = [];
    for (let i = 0; i < this.brikker; i++)
    {
      this.brikArr[i] =
      {
        imgNo: ceil(random(0,3)) - 1,
        x: this.xPosArr[i],
        y: this.yPosArr[i]
      }
    }

    this.stage = "runMinigame";
  }

  runMinigame()
  {
    image(img.sneglehuse.bubble, 0, 0, RES_X, RES_Y);
    image(img.sneglehuse.lives[this.lives-1],0,0,RES_X,RES_Y);

    push();
    imageMode(CENTER);
    for (const n of this.brikArr)
    {
      // to do: måske flip nogle af dem tilfældigt og sæt en lille tilfældig rotation
      image(img.sneglehuse.shell[n.imgNo], n.x, n.y);
    }
    pop();

    push();
    textSize(200);
    stroke(0);
    fill(255);
    strokeWeight(10);
    textAlign(CENTER, CENTER);
    text(this.userInput.toString(), 934, 433);
    textSize(100);
    text("◁        ▷", 934, 423);
    textSize(70);
    strokeWeight(8);
    text("send svar", 934, 600);


    pop();


  }



  draw()
  {
    image(this.background, 0, 0, RES_X, RES_Y);

    skildpadde.draw("sneglespil");

    this[this.stage]();

    if (this.stage != "init" && this.stage != "startSkærm")
    image(img.sneglehuse.n[this.brikkerPrSneglehus - 3], 0, 0, RES_X, RES_Y);

    for (let i = 0; i < this.buttonsArr.length; i++)
    {
      this.buttons[this.buttonsArr[i][0]].draw();
    }
    for (let i = 0; i < this.dialogBoxesArr.length; i++)
    {
      this.dialogBoxes[this.dialogBoxesArr[i][0]].draw();
    }

  }

  mousebind()
  {
    if (this.stage == "runMinigame")
    {
      if (mX > 717 && mX < 833 && mY > 350 && mY < 468) // knap venstre
      {
        if (this.userInput > 1) this.userInput--;
      }
      if (mX > 1045 && mX < 1140 && mY > 353 && mY < 469) // knap højre
      {
        if (this.userInput < 9) this.userInput++;
      }
      if (mX > 762 && mX < 1106 && mY > 550 && mY < 634) // send svar
      {
        if (round(this.brikker / this.brikkerPrSneglehus - 0.5) == this.userInput) this.rigtigt();
        else this.forkert();
      }
    }
  }

  rigtigt()
  {
    this.wins++;
    if (this.wins == 5)
    {
      this.stage = "victory";
    }
    else
    {
      sound.rigtigt_svar.arr[ceil(random(0,6))-1].play();
      this.stage = "initMinigame";
    }
  }

  forkert()
  {
    this.lives--;
    if (this.lives == 0)
    {
      this.stage = "gameOver";
    }
    else
    {
      sound.forkert_svar.arr[ceil(random(0,3))-1].play();
    }
  }

  victory()
  {
    // skilpadde speak
    if (!this.soundHasPlayed.vundet && !sound.sneglehuse.vundet._playing && !sceneIsFading)
    {
      sound.sneglehuse.vundet.play();
      this.soundHasPlayed.vundet = true;
    }

    // når speaken er færdig
    if (!sound.sneglehuse.vundet._playing && this.soundHasPlayed.vundet)
    {
      updateActiveScene(scene.lobby, "black", "slow");
      scene.lobby.buttons.snegle.updateImg();
      this.init();
    }
  }

  gameOver()
  {
    // skilpadde speak
    if (!this.soundHasPlayed.tabt && !sound.sneglehuse.tabt._playing && !sceneIsFading)
    {
      sound.sneglehuse.tabt.play();
      this.soundHasPlayed.tabt = true;
    }

    // når speaken er færdig
    if (!sound.sneglehuse.tabt._playing && this.soundHasPlayed.tabt)
    {
      updateActiveScene(scene.lobby, "black", "slow");
      this.init();
    }
  }

  keybind()
  {
    this.dialogBoxes.tilbage.isActive = true;
  }

}
