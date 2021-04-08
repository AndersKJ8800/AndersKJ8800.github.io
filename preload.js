let img =
{
  background: null,
  placeholder: null,
  complete: null,
  incomplete: null
};

function preload()
{
  img.placeholder = loadImage("resources/images/placeholder.png");
  img.background =
  {
    default: loadImage("resources/images/baggrunde/baggrund.png"),
    sneglehuse: loadImage("resources/images/baggrunde/sneglehuse.png")
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



}
