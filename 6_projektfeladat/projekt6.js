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
  
  setTimeout(function() {
    oramegjelenito();
  }, 1000);
  
  }
  
  oramegjelenito();

  $(document).ready(function(){
    $("p").hide();
    $("button").hide();
    $("#fotozas-tortenete").hide();
    $("#kep").click(function(){
        $("p").show();
        $("button").show();
        $("#kep").hide();
      });
  });

  $("button").click(function(){
    $("#fotozas-tortenete").show();
    $("p").hide();
    $("button").hide();
  });