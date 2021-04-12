let img =
{
  background: null,
  placeholder: null,
  complete: null,
  incomplete: null,
  back: null
};
let hitboxImg =
{
  incomplete:
  {
    koraller: null
  }
};

function preload()
{
  img.placeholder = loadImage("resources/images/placeholder.png");
  img.background =
  {
    default: loadImage("resources/images/baggrunde/baggrund.png"),
    sneglehuse: loadImage("resources/images/baggrunde/sneglehuse.png"),
    delfin: loadImage("resources/images/baggrunde/delfin.png"),
    title: loadImage("resources/images/baggrunde/title.png")
  }
  img.incomplete =
  {
    snegle: loadImage("resources/images/ødelagt/knækkede_snegle.png"),
    delfin: loadImage("resources/images/ødelagt/olie_delfin.png"),
    dykker: loadImage("resources/images/ødelagt/skrald_dykker.png"),
    koraller: loadImage("resources/images/ødelagt/døde_koraller.png")
  };
  img.complete =
  {
    snegle: loadImage("resources/images/placeholder.png"),
    delfin: loadImage("resources/images/placeholder.png"),
    dykker: loadImage("resources/images/placeholder.png"),
    koraller: loadImage("resources/images/ren/rene_koraller.png")
  };
  img.back = loadImage("resources/images/tilbage.png");
  img.back_highlight = loadImage("resources/images/tilbage_highlight.png");

  // custom hitboxes
  hitboxImg.incomplete.koraller = loadImage("resources/images/ødelagt/døde_koraller_hitbox.png")


}
