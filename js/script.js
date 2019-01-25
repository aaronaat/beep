$(document).ready(function(){
  $("form#beep").submit(function(event){
    event.preventDefault();
    var name = $("#name").val();
    var num = $("#num").val();

    if ((num != 0) && (num % 3 === 0)) {
      $("p").append("I'm sorry " + name + " I'm afraid I can't do that! <br>");
    }
    else if ((num.indexOf("0") > -1) && (num.indexOf("1") == -1)) {
      num = "Beep!";
      $("p").append(num + "<br>");
    }
    else if (num.indexOf("1") > -1) {
      num = "Boop!";
      $("p").append(num + "<br>");
    }
    else {
      $("p").append(num + "<br>");
    }
  });

});
