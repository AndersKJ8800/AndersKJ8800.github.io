class DykkerMinigame extends Scene
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
    this.background = img.background.dyk;

    this.stage = "init";

    this.lives;
    this.inactivity =
    {
      timer: null,
      doCounting: null
    }
    this.dots = [];

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

  init()
  {
    this.lives = 3;

    this.inactivity.timer = 0;
    this.doCounting = false;

    let fractionSelection = [ [1,5], [1,4], [1,3], [1,2], [2,3], [2,5], [3,4], [3,5], [4,5] ];
    let decimalSelection = [0.1, 0.15, 0.3, 0.35, 0.45, 0.55, 0.65, 0.7, 0.85, 0.9];

    let nOfDots = 10 // temp
    this.dots = [nOfDots];
    for (let i = 0; i < nOfDots; i++)
    {
      this.dots[i] =
      {
        type: null,
        value: null,
        display: null,
        x: null,
        y: null,
        nInOrder: null,
        isActive: true
      }

      let arr;
      if (random() > 0.5)
      {
        this.dots[i].type = "fraction";
        arr = fractionSelection;
      }
      else
      {
        this.dots[i].type = "decimal";
        arr = decimalSelection;
      }

      for (let recursion = 0; recursion < 1000; recursion++)
      {
        this.dots[i].value = arr[ceil(random(0,arr.length)) - 1];
        let continueLoop = false;
        for (let j = 0; j < i; j++)
        {
          try
          {
            if (this.dots[i].value == this.dots[j].value)
            {
              continueLoop = true;
            }
          }
          catch (exception) {}
        }
        if (!continueLoop)
        {
          break;
        }
      }
    }

    for (let i = 0; i < nOfDots; i++)
    {
      if (this.dots[i].type == "decimal")
      {
        this.dots[i].display = this.dots[i].value.toString();
      }
      else
      {
        this.dots[i].display = this.dots[i].value[0] + "/" + this.dots[i].value[1];
        this.dots[i].value = this.dots[i].value[0] / this.dots[i].value[1];
      }
    }

    {
      let arr = [];
      for (let i = 0; i < nOfDots; i++)
      {
        arr[i] = this.dots[i].value;
      }
      arr.sort();

      for (let i = 0; i < nOfDots; i++)
      {
        for (let j = 0; j < nOfDots; j++)
        {

          if (this.dots[i].value == arr[j])
          {
            this.dots[i].nInOrder = j;
          }
        }
      }

      // positioner
      for (let i = 0; i < nOfDots; i++)
      {
        for (let recursion = 0; recursion < 1000; recursion++)
        {
          this.dots[i].x = ceil(ceil(random(843, 1896)) / 100) * 100;
          this.dots[i].y = ceil(ceil(random(535, 1036)) / 100) * 100;
          let continueLoop = false;
          for (let j = 0; j < i; j++)
          {
            try
            {
              if (this.dots[i].x == this.dots[j].x)
              {
                continueLoop = true;
              }
            }
            catch (exception) {}
          }
          if (!continueLoop)
          {
            break;
          }
        }
      }
      for (let i = 0; i < nOfDots; i++)
      {
        this.dots[i].x += ceil(random(-20,20));
        this.dots[i].y += ceil(random(-20,20));
      }

      this.background = img.dyk.kort;

    }

    this.dots.sort((a,b) => (a.nInOrder > b.nInOrder) ? 1 : ((b.nInOrder > a.nInOrder) ? -1 : 0));

    this.dots[nOfDots-1].x = 843;
    this.dots[nOfDots-1].y = 1036;

    this.stage = "dykkerStartSkærm";
  }

  dykkerStartSkærm()
  {
    // speak

    if (true)
    {
      this.stage = "kortStartSkærm";
    }
  }

  kortStartSkærm()
  {
    // speak

    if (true)
    {
      this.stage = "runMinigame";
    }
  }

  runMinigame()
  {
    try {
      image(img.dyk.lives[this.lives-1],0,0,RES_X,RES_Y);
    } catch (e) {}

    push();
    textSize(40);
    fill(255);
    stroke(0);
    strokeWeight(7);
    textSize(30);
    textAlign(CENTER, CENTER);
    {
      let xArr = [];
      let yArr = [];
      xArr[0] = 1907;
      yArr[0] = 527;
      for (let i = 0; i < this.dots.length; i++)
      {
        xArr[i+1] = this.dots[i].x;
        yArr[i+1] = this.dots[i].y;
      }
      for (let i = 0; i < this.dots.length; i++)
      {
        if (!this.dots[i].isActive)
        {
          line(xArr[i], yArr[i], xArr[i+1], yArr[i+1]);
        }
      }
    }
    for (const n of this.dots)
    {
      if (n.isActive) fill(255);
      else fill(0);
      circle(n.x, n.y, 70);
      fill(255);
      text(n.display, n.x, n.y + 5);
    }
    pop();

  }

  mousebind()
  {
    let m =
    {
      x: mouseX / scaling,
      y: mouseY / scaling
    }
    if (this.stage == "runMinigame" && !this.dialogBoxes.tilbage.isActive)
    {
      for (let i = 0; i < this.dots.length; i++)
      {
        if (abs(this.dots[i].x - m.x) < 40 && abs(this.dots[i].y - m.y) < 40)
        {
          let rigtigtSvar = true;
          for (let j = 0; j < i; j++)
          {
            if (this.dots[j].isActive)
            {
              rigtigtSvar = false;
            }
          }
          if (rigtigtSvar) this.rigtigt(i);
          else this.forkert();
          break;
        }


      }
    }
  }

  rigtigt(n)
  {
    print("rigtig");
    this.dots[n].isActive = false;
    if (n + 1 == this.dots.length)
    {
      this.stage = "victory";
    }
  }

  forkert()
  {
    print("forkert");

    this.lives--;
    if (this.lives == 0)
    {
      this.stage = "gameOver";
    }
  }

  victory()
  {
    // speak

    if (true)
    {
      updateActiveScene(scene.lobby, "black", "slow");
      scene.lobby.buttons.dykker.updateImg();
      this.init();
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

  keybind()
  {
    this.dialogBoxes.tilbage.isActive = true;
  }

}
