function updateActiveScene(newScene, fadeType, fadeSpeed)
{
  if (newScene == null)
  {
    throw new Error();
  }

  // ændrer scene
  {
    let arr = Object.entries(scene);

    for (let i = 0; i < arr.length; i++)
    {
      arr[i][1].isActive = false;
    }

    newScene.isActive = true;
    activeScene = newScene.constructor.name.charAt(0).toLowerCase() + newScene.constructor.name.slice(1);
  }

  if (fadeType != null)
  {
    prevSceneImg = get();
    sceneIsFading = true;
    sceneFadeType = fadeType;
    sceneFadeSpeed = fadeSpeed
    switch (fadeSpeed)
    {
      case "slow": remainingFadeTime = 2000; break;
      case "medium": remainingFadeTime = 1000; break;
      case "fast": remainingFadeTime = 250; break;
    }
    totalFadeTime = remainingFadeTime;
  }

}
