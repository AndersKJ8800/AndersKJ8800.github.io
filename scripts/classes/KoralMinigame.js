class KoralMinigame extends Scene
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
      koral1: new ClickableElement([img.koral.koral[0], null], [img.koral.koral_highlight[0], null], false),
      koral2: new ClickableElement([img.koral.koral[1], null], [img.koral.koral_highlight[1], null], false),
      koral3: new ClickableElement([img.koral.koral[2], null], [img.koral.koral_highlight[2], null], false),
      koral4: new ClickableElement([img.koral.koral[3], null], [img.koral.koral_highlight[3], null], false),
      koral5: new ClickableElement([img.koral.koral[4], null], [img.koral.koral_highlight[4], null], false),
      tilbage: new ArrowBack(this.dialogBoxes.tilbage)

    };
    this.buttonsArr = Object.entries(this.buttons);
    this.background = img.background.koral;

    this.buttons.koral1.effect = function() { scene.koralMinigame.koralEffekt(0); }
    this.buttons.koral2.effect = function() { scene.koralMinigame.koralEffekt(1); }
    this.buttons.koral3.effect = function() { scene.koralMinigame.koralEffekt(2); }
    this.buttons.koral4.effect = function() { scene.koralMinigame.koralEffekt(3); }
    this.buttons.koral5.effect = function() { scene.koralMinigame.koralEffekt(4); }

    this.stage = "init";
    this.lives;
    this.wins;
    this.inactivity =
    {
      timer: null,
      doCounting: null
    }
    this.threshold;
    this.nAboveThreshold;
    this.nArray; // 0: tallet, 1: over eller under (bool), 2: type, 3: gættet rigtigt (bool)
    this.target;
    this.correctAnswers;

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

    this[this.stage]();

    skildpadde.draw("koralspil");

    if (this.stage == "runMinigame" && this.inactivity.doCounting)
    {
      this.inactivity.timer += deltaTime;
      if (this.inactivity.timer > hintCountdownTime)
      {
        this.inactivity.timer = 0;
        sound.koralrev.manglende_klik.play();
      }
    }








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
    this.wins = 0;
    this.inactivity.timer = 0;
    this.inactivity.doCounting = true;

    this.soundHasPlayed.intro = false;
    this.soundHasPlayed.vundet = false;
    this.soundHasPlayed.tabt = false;

    this.stage = "startScreen";
  }

  startScreen()
  {
    // skilpadde speak
    if (!this.soundHasPlayed.intro && !sound.koralrev.intro._playing && !sceneIsFading)
    {
      sound.koralrev.intro.play();
      this.soundHasPlayed.intro = true;
    }

    // når speaken er færdig
    if (!sound.koralrev.intro._playing && this.soundHasPlayed.intro)
    {
      this.stage = "initMinigame";
    }
  }

  initMinigame()
  {
    if (random() > 0.5) this.target = "<";
    else this.target = ">";

    this.correctAnswers = [false,false,false,false,false];

    this.threshold = round(random(0.4, 1.2) * 20) / 20; // tal mellem 0.4 og 1.5 afrundet til en tyvende-del (0.35, 0.1, 1.45, etc.)
    this.nAboveThreshold = ceil(random(1,4)); // antal af koraller der skal være højere

    this.nArray = [[null, false, null, true],[null, false, null, true],[null, false, null, true],[null, false, null, true],[null, false, null, true]];

    let remaining = null;

    // vælger hvilke koraller der skal være over
    for (let i = 0; i < 1000000; i++)
    {
      let nTrue = 0;
      for (const n of this.nArray)
      {
        if (n[1] == true)
        {
          nTrue++;
        }
      }
      let remaining = this.nAboveThreshold - nTrue;

      if (remaining > 0)
      {
        let rand = abs(ceil(random(0,5) - 1));
        this.nArray[rand][1] = true;
      }
    }

    // vælger korallernes type af tal
    for (const n of this.nArray)
    {
      if (random() > 0.5)
      {
        n[2] = "decimal";
      }
      else
      {
        n[2] = "fraction";
      }
    }

    // bestemmer korallernes tal
    for (const n of this.nArray)
    {
      if (n[2] == "decimal")
      {
        for (let i = 0; i < 1000000; i++)
        {
          if (n[1] == true)
          {
            if (n[0] == null || (n[0] <= this.threshold))
            {
              n[0] = round(random(this.threshold, 2) * 20) / 20;
            }
            else { break }
          }
          else
          {
            if (n[0] == null || (n[0] >= this.threshold))
            {
              n[0] = round(random(0.1, this.threshold) * 20) / 20;
            }
            else { break }
          }
        }
      }

      if (n[2] == "fraction")
      {
        if (n[0] == null) n[0] = this.generateFraction();
        for (let i = 0; i < 1000000; i++)
        {
          if (n[1] == true)
          {
            if ((n[0][0] / n[0][1]) < this.threshold && (n[0][0] / n[0][1]) < 3) n[0] = this.generateFraction();
          }
          if (n[1] == false)
          {
            if ((n[0][0] / n[0][1]) > this.threshold) n[0] = this.generateFraction();
          }
        }
      }
    }

    this.remaining = this.nAboveThreshold;
    if (this.target == "<") this.remaining = 5 - this.remaining;

    this.stage = "runMinigame";
  }

  generateFraction()
  {
    return [ceil(random(0,8)), ceil(random(1,8))];
  }

  runMinigame()
  {

    if (this.inactivity.doCounting) this.inactivity.timer += deltaTime;

    {
      push()
      image(img.koral.bobbel,0,0,RES_X,RES_Y);
      fill(255);
      stroke(0);
      strokeWeight(16);
      textSize(150);
      textAlign(CENTER, CENTER);
      text(this.target + " " + this.decimalToComma(this.threshold), 934, 413);
      pop();
    }


    {
      push();
      fill(255);
      stroke(0);
      strokeWeight(8);
      textSize(50);
      textAlign(CENTER, CENTER);
      let y = 1440;
      let xArr = [760, 1170, 1503, 1828, 2118];
      for (let i = 0; i < 5; i++)
      {
        if (this.nArray[i][3]) fill (255);
        else fill (0,255,0);
        if (this.nArray[i][2] == "decimal")
        {
          text(this.decimalToComma(this.nArray[i][0]), xArr[i], y);
        }
        if (this.nArray[i][2] == "fraction")
        {
          text(this.nArray[i][0][0], xArr[i], y - 25); // tæller
          text("_", xArr[i], y - 20);
          text(this.nArray[i][0][1], xArr[i], y + 40); // nævner
        }
      }
      pop();
    }

    if (this.lives > 0) image(img.koral.lives[this.lives - 1],0,0,RES_X,RES_Y);
  }

  victory()
  {
    // skilpadde speak
    if (!this.soundHasPlayed.vundet && !sound.koralrev.vundet._playing && !sceneIsFading)
    {
      sound.koralrev.vundet.play();
      this.soundHasPlayed.vundet = true;
    }

    // når speaken er færdig
    if (!sound.koralrev.vundet._playing && this.soundHasPlayed.vundet)
    {
      updateActiveScene(scene.lobby, "black", "slow");
      scene.lobby.buttons.koraller.updateImg();
      this.init();
    }
  }

  gameOver()
  {
    // skilpadde speak
    if (!this.soundHasPlayed.tabt && !sound.koralrev.tabt._playing && !sceneIsFading)
    {
      sound.koralrev.tabt.play();
      this.soundHasPlayed.tabt = true;
    }

    // når speaken er færdig
    if (!sound.koralrev.tabt._playing && this.soundHasPlayed.tabt)
    {
      updateActiveScene(scene.lobby, "black", "slow");
      this.init();
    }
  }

  koralEffekt(n)
  {
    if (this.stage == "runMinigame")
    {
      if (!this.correctAnswers[n])
      {
        if (this.target == ">")
        {
          if (this.nArray[n][2] == "decimal")
          {
            if (this.nArray[n][0] > this.threshold) this.rigtigt(n);
            else this.forkert(n);
          }
          if (this.nArray[n][2] == "fraction")
          {
            if (this.divArray(this.nArray[n][0]) > this.threshold) this.rigtigt(n);
            else this.forkert(n);
          }
        }

        if (this.target == "<")
        {
          if (this.nArray[n][2] == "decimal")
          {
            if (this.nArray[n][0] < this.threshold) this.rigtigt(n);
            else this.forkert(n);
          }
          if (this.nArray[n][2] == "fraction")
          {
            if (this.divArray(this.nArray[n][0]) < this.threshold) this.rigtigt(n);
            else this.forkert(n);
          }
        }
      }

    }
  }

  rigtigt(n)
  {
    this.inactivity.doCounting = false;
    if (this.nArray[n][3])
    {
      this.correctAnswers[n] = true;
      this.nArray[n][3] = false;
      this.remaining--;
      if (this.remaining == 0)
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
    }



  }

  forkert(n)
  {
    this.inactivity.doCounting = false;
    this.lives--;
    if (this.lives <= 0)
    {
      this.stage = "gameOver";
    }
    else
    {
      sound.forkert_svar.arr[ceil(random(0,3))-1].play();
    }
  }

  decimalToComma(string)
  {
    string = string.toString();
    return string.replace(".", ",");
  }

  divArray(arr)
  {
    return arr[0] / arr[1];
  }

  /*mousebind()
  {

  }*/

  hitReg(hoverOrClick)
  {
    if (this.stage == "runMinigame")
    {
      super.hitReg(hoverOrClick);
    }
  }


  keybind()
  {
    this.dialogBoxes.tilbage.isActive = true;
  }

}
