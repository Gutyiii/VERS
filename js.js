var vers = [
    {
        cim:"Lápi trotty",
        szerzo:"Bauer Lóránt L",
        vers:"Zsombékos, vizes vidéken éldegél a Lápi Trotty<br>Meglapul a fű között, és nem látod, csak úgy-ahogy<br><br>Hisz nem ugrál és nem pattog, nem hallod, hogy vízbepotty<br>Fényes nappal mélyen hallgat rejtekén a Lápi Trotty<br><br>Alkonyattájt megélénkül, száll a vidám trottykurutty<br>Mert nem fog a Lápi Trottyon se nátha, se hörghurutty<br><br>Igen ritka, védett állat, száma mégis egyre fogy –<br>Vadászik rá kóbor macska és a Csempeszáju Klotty<br><br>Húsa fanyar ízvilágú, s rágós-nyúlós is pedig<br>A lápi népek Mocsári Puding néven ismerik<br><br>Ne is fogyassz Lápi Trottyot, szeresd inkább, óvjad őt<br>Úgy tartják, hogy ő hoz nekünk iszapszagot, rossz idő<br><br>Béketűrő házi kedvenc, ha fogságban neveled<br>Megül nyugton az öledben, elvan szépen teveled<br><br>Haleledelt, sós rudacskát, szottyadt vadkörtét eszik<br>Költöztesd a fürdőkádba, elél hosszú évekig<br><br>Zsombékos, vizes vidéken éldegél a Lápi Trotty<br>Ott szuszog a fű között, és nem látod, csak úgy-ahogy<br><br>Ha rálépsz, trottyan egy halkat:<br>Olyan lesz a cipőtalpad<br><br>",
        kep:"kepek/lapitrotty.PNG"
    }
];

$(function(){
    $(".tartalom").empty();
    $(".tartalom").append("<div class='Lápi trotty'><h3>"+vers[0].cim+"</h3><br><br><p>"+vers[0].vers+"</p><br><br><p>"+vers[0].szerzo+"</p></div>")
    $("div h3").on("click", kepMegjelenites);

  });

  function kepMegjelenites(){
    $(".tartalom").append("<div class='lapkep'><img></div>");
    $(".tartalom img").attr("src",vers[0].kep);
  }