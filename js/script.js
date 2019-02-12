var name = null;
var num = null;
var numbers = [];

function beep(number) {
  for (i = 0; i <= number; i++) {

    var t = i.toString();

    if ((t != 0) && (t % 3 === 0)) {
      numbers.push(" I'm sorry " + name + " I'm afraid I can't do that!");
    }
    else if ((t.indexOf("0", i) > -1) && (t.indexOf("1", i) == -1)) {
      numbers.push(" Beep!");
    }
    else if (t.indexOf("1") > -1) {
      numbers.push(" Boop!");
    }
    else {
      numbers.push(" " + t);
    }
  };
};

$(document).ready(function() {

  $("form#beep").submit(function(event) {
    event.preventDefault();
    
    numbers = [];
    name = $("#name").val();
    num = $("#num").val();

    beep(num);
    $("p").text(numbers);

  });
});
