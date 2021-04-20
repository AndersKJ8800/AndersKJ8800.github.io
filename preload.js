let img =
{
  background: null,
  placeholder: null,
  complete: null,
  incomplete: null,
  back: null,
  delfin: null,
  sneglehuse: null
};
let hitboxImg =
{
  incomplete:
  {
    koraller: null
  }
};
let music =
{
  default: null
}

function preload()
{
  img.placeholder = loadImage("resources/images/placeholder.png");
  img.background =
  {
    default: loadImage("resources/images/baggrunde/baggrund.png"),
    sneglehuse: loadImage("resources/images/baggrunde/sneglehuse.png"),
    delfin: loadImage("resources/images/baggrunde/delfin.png"),
    title: loadImage("resources/images/baggrunde/title.png"),
    fisk: loadImage("resources/images/baggrunde/fisk.png"),
    koral: loadImage("resources/images/baggrunde/koral.png"),
    dyk: loadImage("resources/images/baggrunde/dyk.png")
  }
  img.incomplete =
  {
    snegle: loadImage("resources/images/ødelagt/knækkede_snegle.png"),
    delfin: loadImage("resources/images/ødelagt/olie_delfin.png"),
    dykker: loadImage("resources/images/ødelagt/skrald_dykker.png"),
    koraller: loadImage("resources/images/ødelagt/døde_koraller.png"),
    fisk: loadImage("resources/images/ødelagt/fisk_beskidt.png"),
    snegle_highlight: loadImage("resources/images/ødelagt/knækkede_snegle_highlight.png"),
    delfin_highlight: loadImage("resources/images/ødelagt/olie_delfin_highlight.png"),
    dykker_highlight: loadImage("resources/images/ødelagt/skrald_dykker_highlight.png"),
    koraller_highlight: loadImage("resources/images/ødelagt/døde_koraller_highlight.png"),
    fisk_highlight: loadImage("resources/images/ødelagt/fisk_beskidt_highlight.png")
  };
  img.complete =
  {
    snegle: loadImage("resources/images/ren/snegle_ren.png"),
    delfin: loadImage("resources/images/ren/delfin_ren.png"),
    dykker: loadImage("resources/images/ren/dykker_ren.png"),
    koraller: loadImage("resources/images/ren/rene_koraller.png"),
    fisk: loadImage("resources/images/ren/fisk_ren.png"),
    snegle_highlight: loadImage("resources/images/ren/snegle_ren_highlight.png"),
    delfin_highlight: loadImage("resources/images/ren/delfin_ren_highlight.png"),
    dykker_highlight: loadImage("resources/images/ren/dykker_ren_highlight.png"),
    koraller_highlight: loadImage("resources/images/ren/rene_koraller_highlight.png"),
    fisk_highlight: loadImage("resources/images/ren/fisk_ren_highlight.png")
  };
  img.back = loadImage("resources/images/tilbage.png");
  img.back_highlight = loadImage("resources/images/tilbage_highlight.png");
  img.delfin =
  {
    lives: [loadImage("resources/images/minigames/delfin/1_liv.png"), loadImage("resources/images/minigames/delfin/2_liv.png"), loadImage("resources/images/minigames/delfin/3_liv.png")],
    dl10: loadImage("resources/images/minigames/delfin/10_dl.png"),
    dl12: loadImage("resources/images/minigames/delfin/12_dl.png"),
    dl15: loadImage("resources/images/minigames/delfin/15_dl.png"),
    arrow: loadImage("resources/images/minigames/delfin/pil.png")
  }
  img.sneglehuse =
  {
    lives: [loadImage("resources/images/minigames/sneglehuse/1_liv.png"), loadImage("resources/images/minigames/sneglehuse/2_liv.png"), loadImage("resources/images/minigames/sneglehuse/3_liv.png")],
    shell: [loadImage("resources/images/minigames/sneglehuse/skal_1.png"), loadImage("resources/images/minigames/sneglehuse/skal_2.png"), loadImage("resources/images/minigames/sneglehuse/skal_3.png")],
    bubble: loadImage("resources/images/minigames/sneglehuse/bobbel.png"),
    three: loadImage("resources/images/minigames/sneglehuse/3.png"),
    four: loadImage("resources/images/minigames/sneglehuse/4.png"),
    five: loadImage("resources/images/minigames/sneglehuse/5.png"),
  }
  img.fisk =
  {
    lives: [loadImage("resources/images/minigames/fisk/1_liv.png"), loadImage("resources/images/minigames/fisk/2_liv.png"), loadImage("resources/images/minigames/fisk/3_liv.png")],
    styk:
    [
      loadImage("resources/images/minigames/fisk/styk_1.png"),
      loadImage("resources/images/minigames/fisk/styk_2.png"),
      loadImage("resources/images/minigames/fisk/styk_3.png"),
      loadImage("resources/images/minigames/fisk/styk_4.png"),
      loadImage("resources/images/minigames/fisk/styk_5.png"),
      loadImage("resources/images/minigames/fisk/styk_6.png"),
      loadImage("resources/images/minigames/fisk/styk_7.png"),
      loadImage("resources/images/minigames/fisk/styk_8.png")
    ]
  }
  img.koral =
  {
    lives: [loadImage("resources/images/minigames/koral/1_liv.png"), loadImage("resources/images/minigames/koral/2_liv.png"), loadImage("resources/images/minigames/koral/3_liv.png")],
    koral:
    [
      loadImage("resources/images/minigames/koral/koral_1.png"),
      loadImage("resources/images/minigames/koral/koral_2.png"),
      loadImage("resources/images/minigames/koral/koral_3.png"),
      loadImage("resources/images/minigames/koral/koral_4.png"),
      loadImage("resources/images/minigames/koral/koral_5.png")
    ]
  }
  img.dyk =
  {
    lives: [loadImage("resources/images/minigames/dyk/1_liv.png"), loadImage("resources/images/minigames/dyk/2_liv.png"), loadImage("resources/images/minigames/dyk/3_liv.png")],
    kort: loadImage("resources/images/minigames/dyk/kort.png")
  }

  // custom hitboxes
  hitboxImg.incomplete.koraller = loadImage("resources/images/ødelagt/døde_koraller_hitbox.png")

  //musssik
  music =
  {
    //default: loadSound("resources/sound/music/default.mp3")
  }


}
