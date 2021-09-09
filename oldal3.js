var versTomb=[
    {
        cim:"Lusták Dala",
        szerzo:"Tóth Krisztina",
        vers:'Gyere lusta, feküdj mellém,<br>kezdjünk együtt lustálkodni,<br>és csak lógjunk itt egész nap,<br>mint kötélen fél pár zokni!<br><br>Gyere, bújj be mellém, lusta,<br>mondjuk el, mit nem csinálunk!<br>Most arról készüljön lista,<br>mi minden nem lesz ma nálunk!<br><br>Nem lesz itt ma nyelvtanlecke,<br>olyat lusták nem csinálnak.<br>Cerka se lesz kihegyezve,<br>és az öltözés is várhat.<br><br>Lego nem lesz itt ma rendben,<br>nem lesz mosdás, nem lesz séta!<br>Nehogy már mozdulni kelljen!<br>Elterülünk, mint a béka.<br><br>Szemetet ma nem viszünk le,<br>piszkos edényt nem mosunk el.<br>Aki fel próbálna hívni,<br>csak csöngessen, annak úgy kell!<br><br>Ez a lusták napja, vagy mi,<br>átalusszuk az egészet,<br>tessék minket békén hagyni,<br>ágyba kérjük az ebédet!',
        kep:"kepek/lustakdala.jpg"
    },
    {
        cim:"Nyúliskola",
        szerzo:"Romhányi József",
        vers:'Erdőszélen nagy a móka, mulatság,<br>iskolába gyűlnek mind a nyulacskák.<br>A tanító ott középen az a nyúl,<br>kinek füle leghosszabbnak bizonyul.<br>Kezdi az oktatást egy fej káposztával,<br>Hallgatják is tátott szájjal.<br><br>- Az egymást tapasztó<br>táposztó<br>levelek képezte káposzta<br>letépett<br>levelein belül tapasztalt betétet,<br>mely a kopasztott káposzta törzse,<br>úgy hívják, hogy torzsa.<br>Ha most a torzsára<br>sorjába<br>visszatapasztjuk<br>a letépett táposztó káposztaleveleket,<br>a tapasztalt rendben,<br>akkor szakasztott, helyesen<br>fejesen<br>szerkesztett káposztát képeztünk.<br><br>Ez a lecke! Megértettük? - kérdezte a nyúltanár.<br>Bólogattak a nebulók, hisz mindegyik unta már.<br>- Akkor rögtön feleltetek! -<br>Lapult a sok tapsifül,<br>füllentettek, dehogy értik, és ez most mindjárt kisül!<br><br>- Nos felelj, te Nyuszi Gyuszi! Állj kétlábra, s vázold hát,<br>mi történik, ha ízekre bontasz egy fej káposztát?<br>- Jóllakok! - felelte elképesztő képzetten<br>a kis káposzta-kopasztó ebugatta,<br>de a tanár megbuktatta.',
        kep:"kepek/nyuliskola.jpg"
    }
];

$(function(){

    $("#gomb1").on("click",versMegjelenit1);
    $("#gomb2").on("click",versMegjelenit2);
  
  });

  function versMegjelenit1(){
    $(".tartalom").empty();
    $(".tartalom").append("<div><h3>"+versTomb[0].cim+"</h3><p>"+versTomb[0].vers+"</p><p>"+versTomb[0].szerzo+"</p></div>");
  }

  function versMegjelenit2(){
    $(".tartalom").empty();
    $(".tartalom").append("<div><h3>"+versTomb[1].cim+"</h3><p>"+versTomb[1].vers+"</p><p>"+versTomb[1].szerzo+"</p></div>");
  }