function drawScenes()
{
  let arr = Object.entries(scene);

  for (let i = 0; i < arr.length; i++)
  {
    if (arr[i][1].isActive)
    {
      scene[arr[i][0]].draw();
    }
  }


}
