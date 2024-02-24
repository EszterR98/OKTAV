var aru ={
    'kategoria': "ruházati cikk",
    'megnevezés':'zakó',
    'egyéb':{
        'vászon':'1200Ft van raktáron',
        'farmer':'1000 nincs raktáron',
    },
    'raktaron':1000,
    'darab':0,
}

var maradekKeszlet = aru.raktaron;
var rendeltMennyiseg = aru.darab;

rendeltMennyiseg = prompt(" Adja meg, hány darabot kér: ");

function darab(){
    if(maradekKeszlet - rendeltMennyiseg >= 0){
        alert("Ön sikeresen megrendelt " + rendeltMennyiseg + " mennyiséget")
    }else{
        alert("Nincs raktáron ennyi a termékből.")
    }
}
darab();
