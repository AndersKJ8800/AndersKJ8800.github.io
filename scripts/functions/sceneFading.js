function sceneFading()
{
  // tegn sidste scene under overgang
  if (sceneIsFading)
  {
    let alpha = 255 - round(((totalFadeTime - remainingFadeTime) / totalFadeTime) * 255);
    remainingFadeTime -= deltaTime;
    if (remainingFadeTime <= 0)
    {
      remainingFadeTime = 0;
      sceneIsFading = false;
    }
    if (sceneFadeType == "direct")
    {
      tint(255, alpha);
      image(prevSceneImg, 0, 0, RES_X, RES_Y);
    }
    if (sceneFadeType == "black")
    {
      if (alpha > 127)
      {
        image(prevSceneImg, 0, 0, RES_X, RES_Y);
        fill(0, 255 - (alpha - 128) * 2);
        rect(RES_X / 2, RES_Y / 2, RES_X, RES_Y);
      }
      else
      {
        fill(0, alpha * 2);
        rect(RES_X / 2, RES_Y / 2, RES_X, RES_Y);
      }
    }
    noTint();
  }
}
