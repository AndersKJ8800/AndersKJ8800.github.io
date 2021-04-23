let img =
{
  background: null,
  placeholder: null,
  complete: null,
  incomplete: null,
  back: null,
  delfin: null,
  sneglehuse: null,
  skildpadde: null
};
let hitboxImg =
{
  incomplete:
  {
    koraller: null
  }
};
let music;
let partyMusic;
let sound =
{
  start: null, // v
  intro: null, // v
  ved_klik_på_figur: null, // v
  sneglehuse: null, // v
  delfinbad: null, // v
  fiskemad: null, // v
  dykkerens_kort: null, // v
  koralrev: null, // v
  jokes: null,
  dialogbox: null, // v
  vundet_spil: null, // v
  rigtigt_svar: null, // v
  forkert_svar: null // v
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
    n: [loadImage("resources/images/minigames/sneglehuse/3.png"), loadImage("resources/images/minigames/sneglehuse/4.png"), loadImage("resources/images/minigames/sneglehuse/5.png")]
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
    ],
    styk_ikon: loadImage("resources/images/minigames/fisk/styk_ikon.png")
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
    ],
    koral_highlight:
    [
      loadImage("resources/images/minigames/koral/koral_1_highlight.png"),
      loadImage("resources/images/minigames/koral/koral_2_highlight.png"),
      loadImage("resources/images/minigames/koral/koral_3_highlight.png"),
      loadImage("resources/images/minigames/koral/koral_4_highlight.png"),
      loadImage("resources/images/minigames/koral/koral_5_highlight.png")
    ],
    bobbel: loadImage("resources/images/minigames/koral/bobbel.png")
  }
  img.dyk =
  {
    lives: [loadImage("resources/images/minigames/dyk/1_liv.png"), loadImage("resources/images/minigames/dyk/2_liv.png"), loadImage("resources/images/minigames/dyk/3_liv.png")],
    kort: loadImage("resources/images/minigames/dyk/kort.png")
  }
  img.skildpadde =
  {
    def: [loadImage("resources/images/skildpadde/def.png"), loadImage("resources/images/skildpadde/def_mund.png")],
    delfinspil: [loadImage("resources/images/skildpadde/delfinspil.png"), loadImage("resources/images/skildpadde/delfinspil_mund.png")],
    dykkerspil: [loadImage("resources/images/skildpadde/dykkerspil.png"), loadImage("resources/images/skildpadde/dykkerspil_mund.png")],
    fiskemad: [loadImage("resources/images/skildpadde/fiskemad.png"), loadImage("resources/images/skildpadde/fiskemad_mund.png")],
    koralspil: [loadImage("resources/images/skildpadde/koralspil.png"), loadImage("resources/images/skildpadde/koralspil_mund.png")],
    sneglespil: [loadImage("resources/images/skildpadde/sneglespil.png"), loadImage("resources/images/skildpadde/sneglespil_mund.png")]
  }

  // custom hitboxes
  hitboxImg.incomplete.koraller = loadImage("resources/images/ødelagt/døde_koraller_hitbox.png")



  //musssik
  music = loadSound("resources/sound/music/default.mp3");
  partyMusic = loadSound("resources/sound/music/party.mp3");

  sound =
  {
    start: ls(0,"start"),
    intro: ls(1,"intro"),
    ved_klik_på_figur:
    {
      arr:
      [
        ls(2,"Lad os"),
        ls(2,"Red matlantis"),
        ls(2,"Cowabunga")
      ]
    },
    sneglehuse:
    {
      intro: ls(3,"intro"),
      vundet: ls(3,"vundet"),
      tabt: ls(3,"tabt"),
      manglende_klik: ls(3,"manglende klik"),
    },
    delfinbad:
    {
      intro: ls(4,"intro"),
      vundet: ls(4,"vundet"),
      tabt: ls(4,"tabt"),
      manglende_klik: ls(4,"manglende klik"),
    },
    fiskemad:
    {
      intro: ls(5,"intro"),
      vundet: ls(5,"vundet"),
      tabt: ls(5,"tabt"),
      manglende_klik: ls(5,"manglende klik"),
    },
    dykkerens_kort:
    {
      intro: ls(6,"intro"),
      vundet: ls(6,"vundet"),
      tabt: ls(6,"tabt"),
      manglende_klik: ls(6,"manglende klik"),
    },
    koralrev:
    {
      intro: ls(7,"intro"),
      vundet: ls(7,"vundet"),
      tabt: ls(7,"tabt"),
      manglende_klik: ls(7,"manglende klik"),
    },
    jokes:
    {
      arr:
      [
        ls(8,"dykker"), ls(8,"haj"), ls(8,"fisk")
      ]
    },
    dialogbox:
    {
      afslut_spil: ls(9,"afslut spillet"),
      tilbage: ls(9,"tilbage")
    },
    vundet_spil: ls(10,"vundet spil"),
    rigtigt_svar:
    {
      arr:
      [
        ls(11,"rigtigt svar 1"), ls(11,"rigtigt svar 2"), ls(11,"rigtigt svar 3"), ls(11,"rigtigt svar 4"), ls(11,"rigtigt svar 5"), ls(11,"rigtigt svar 6")
      ]
    },
    forkert_svar:
    {
      arr:
      [
        ls(12,"forkert svar 1"), ls(12,"forkert svar 2"), ls(12,"forkert svar 3")
      ]
    }
  }

}

function ls (int, string)
{
  folderNameArr =
  [
    "0_start",
    "1_intro",
    "2_ved klik på figur",
    "3_sneglehuse",
    "4_delfinbad",
    "5_fiskemad",
    "6_dykkerens kort",
    "7_koralrev",
    "8_jokes",
    "9_dialogboks",
    "10_vundet spil",
    "11_rigtigt svar",
    "12_forkert svar"
  ];

  return loadSound("resources/sound/" + folderNameArr[int] + "/" + string + ".mp3");
}
