class FiskMinigame extends Scene
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
    this.background = img.background.fisk;

    this.lives;
    this.wins;
    this.inactivity =
    {
      timer: 0,
      doCounting: false
    }
    this.fishArr = [];

    this.stage = "init";

    this.sliceArr =
    [
      new Slice(0),
      new Slice(1),
      new Slice(2),
      new Slice(3),
      new Slice(4),
      new Slice(5),
      new Slice(6),
      new Slice(7)
    ];

  }

  init()
  {
    this.lives = 3;
    this.wins = 0;
    this.inactivity.timer = 0;
    this.inactivity.doCounting = false;



    this.stage = "startScreen";
  }

  startScreen()
  {
    // speak

    if (true)
    {
      this.stage = "initMinigame"
    }
  }

  initMinigame()
  {
    for (let i = 0; i < this.sliceArr.length; i++)
    {
      this.sliceArr[i].isActive = true;
      this.sliceArr[i].x = 0;
      this.sliceArr[i].y = 0;
    }

    this.nToFeed = ceil(random(2,5));
    {
      let xPosArr = [255, 541, 1521, 1898, 1839];
      let yPosArr = [928, 375, 237, 693, 1251];
      let xTextPosArr = [423, 717, 1244, 1860, 1564];
      let yTextPosArr = [931, 205, 178, 803, 1349];
      for (let i = 0; i < 5; i++)
      {
        this.fishArr[i] =
        {
          n: i,
          isActive: false,
          toFeed: null,
          nFed: null,
          x: xPosArr[i],
          y: yPosArr[i],
          xText: xTextPosArr[i],
          yText: yTextPosArr[i]
        }
      }
    }

    for (let i = 0; i < this.nToFeed; i++)
    {
      let r = ceil(random(0 + i,5))-1;
      this.fishArr[r].isActive = true;
      this.fishArr.sort((a,b) => (b.isActive > a.isActive) ? 1 : ((a.isActive > b.isActive) ? -1 : 0));
    }

    let comboArr1 =
    [
      [
        [4,3,1],
        [3,3,2],
        [2,2,4]
      ],
      [
        [1,1,4,2],
        [1,3,2,2],
        [3,3,1,1],
        [2,2,2,2]
      ],
      [
        [1,1,4,1,1],
        [3,1,1,2,1],
        [1,2,2,1,2]
      ]
    ];

    let comboArr2 = comboArr1[this.nToFeed-3];
    let comboArr3 = comboArr2[ceil(random(0,comboArr2.length)) - 1];

    for (let i = 0; i < this.nToFeed; i++)
    {
      this.fishArr[i].toFeed = comboArr3[i];
      this.fishArr[i].nFed = 0;
    }




    this.stage = "runMinigame";
  }

  runMinigame()
  {

    image(img.fisk.lives[this.lives-1],0,0,RES_X,RES_Y);

    push();
    {
      textAlign(CENTER, CENTER);
      textSize(60);
      fill(255);
      stroke(0);
      strokeWeight(8);
      for (let i = 0; i < 5; i++)
      {
        if (this.fishArr[i].isActive)
        {
          let str = this.fishArr[i].toFeed.toString() + "/8";
          if (str == "2/8") str = "1/4";
          if (str == "4/8") str = "1/2";
          if (str == "6/8") str = "3/4";
          let x = this.fishArr[i].xText;
          let y = this.fishArr[i].yText;
          text(str, x, y);

          for (let j = 0; j < this.fishArr[i].nFed; j++)
          {
            image(img.fisk.styk_ikon, this.fishArr[i].x + j * 50, this.fishArr[i].y);
          }

        }
      }
    }
    pop();

    for (let i = 0; i < 8; i++)
    {
      if (this.sliceArr[i].isActive)
      {
        this.sliceArr[i].draw();

        if (mouseIsDown)
        {
          if (this.sliceArr[i].isHolding)
          {
            this.sliceArr[i].x -= (pmouseX - mouseX) / scaling;
            this.sliceArr[i].y -= (pmouseY - mouseY) / scaling;
          }
        }
        else
        {
          if (this.sliceArr[i].isHolding)
          {
            this.sliceArr[i].isHolding = false;
            let mX = ceil(mouseX / scaling);
            let mY = ceil(mouseY / scaling);
            for (let j = 0; j < this.fishArr.length; j++)
            {
              let xDiff = mX - this.fishArr[j].x;
              let yDiff = mY - this.fishArr[j].y;
              let diff = sqrt(pow(xDiff,2)+pow(yDiff,2));
              if (diff < 200)
              {
                if (this.fishArr[j].toFeed - this.fishArr[j].nFed > 0)
                {
                  this.sliceArr[i].isActive = false;
                  this.rigtigt(j);
                }
                else
                {
                  this.sliceArr[i].x = 0;
                  this.sliceArr[i].y = 0;
                  this.forkert(j);
                }
              }
              else
              {
                this.sliceArr[i].x = 0;
                this.sliceArr[i].y = 0;
              }
            }
          }
        }
      }

    }


  }

  rigtigt(n)
  {
    print("rigtigt");
    this.fishArr[n].nFed++;

    let bool = true;
    for (let i = 0; i < this.fishArr.length; i++)
    {
      if (this.fishArr[i].toFeed - this.fishArr[i].nFed != 0){
        bool = false;
      }
    }
    if (bool)
    {
      this.wins++
      if (this.wins == 3)
      {
        this.stage = "victory";
      }
      else
      {
        this.stage = "initMinigame";
      }
    }


  }

  forkert(n)
  {
    print("forkert");
    this.lives--
    if (this.lives == 0)
    {
      this.stage = "gameOver";
    }
  }

  gameOver()
  {
    // speak
    if (true)
    {
      updateActiveScene(scene.lobby, "black", "slow");
      this.init();
    }
  }

  victory()
  {
    if (true)
    {
      updateActiveScene(scene.lobby, "black", "slow");
      scene.lobby.buttons.fisk.updateImg();
      this.init();
    }
  }

  onMousePress()
  {
    for (let i = 0; i < 8; i++)
    {
      if (this.sliceArr[i].hitReg())
      {
        this.sliceArr[i].isHolding = true;
      }
    }
  }

  draw()
  {
    image(this.background, 0, 0, RES_X, RES_Y);

    this[this.stage]();








    for (let i = 0; i < this.buttonsArr.length; i++)
    {
      this.buttons[this.buttonsArr[i][0]].draw();
    }
    for (let i = 0; i < this.dialogBoxesArr.length; i++)
    {
      this.dialogBoxes[this.dialogBoxesArr[i][0]].draw();
    }

  }

















  keybind()
  {
    this.dialogBoxes.tilbage.isActive = true;
  }

}
