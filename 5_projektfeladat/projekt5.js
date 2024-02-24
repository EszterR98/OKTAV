function oramegjelenito(){
    var date = new Date();
  var hours = date.getHours();
  var minutes=date.getMinutes();
  var second=date.getSeconds();
  if (second < 10) {
    second = '0' + second;
  }
  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  var ora= hours + ":" + minutes + ":" + second ;
  document.getElementById('clock').innerHTML = ora;
  var szin = '#' + hours + minutes + second;
  document.body.style.background = szin;
    
    
    
  
  setTimeout(function() {
    oramegjelenito();
  }, 1000);
  
  }
  
  oramegjelenito();

  var sorszam = [1,2,3,4];

  $("#tema" + sorszam[0]).on("click", function(){
    $("#clock").css("fontSize", "100px").css("fontFamily", "Tahoma");
  });
  $("#tema" + sorszam[1]).on("click", function(){
    $("#clock").css("fontSize", "150px").css("fontFamily", "Comic Sans MS");
  });
  $("#tema"+ sorszam[2]).on("click", function(){
    $("#clock").css("fontSize", "200px").css("fontFamily", "Franklin Gothic Light");
  });
  $("#tema"+ sorszam[3]).on("click", function(){
    $("#clock").css("fontSize", "250px").css("fontFamily", "Times New Roman");
  });
