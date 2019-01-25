$(document).ready(function(){
  $("form#beep").submit(function(event){
    event.preventDefault();
    var name = $("#name").val();
    var num = $("#num").val();
    var numbers = num.split(",");


    numbers.forEach(function(number, i) {
      if ((number != 0) && (number % 3 === 0)) {
        numbers[i] = " I'm sorry " + name + " I'm afraid I can't do that!";
      }
      else if ((number.indexOf("0", i) > -1) && (number.indexOf("1", i) == -1)) {
        numbers[i] = " Beep!";
      }
      else if (number.indexOf("1") > -1) {
        numbers[i] = " Boop!"
      }
      else {
        number = numbers[1]
      }
    });

    $("p").text(numbers);

  });

});
