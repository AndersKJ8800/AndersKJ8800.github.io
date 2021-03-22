function updateActiveScene(newScene)
{
  if (newScene == null)
  {
    throw new Error();
  }

  let arr = Object.entries(scene);

  for (let i = 0; i < arr.length; i++)
  {
    arr[i][1].isActive = false;
  }

  newScene.isActive = true;
  activeScene = newScene.constructor.name.charAt(0).toLowerCase() + newScene.constructor.name.slice(1);;

}
