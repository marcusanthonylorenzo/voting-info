
$(document).ready(function() {
  const age = parseInt(prompt("How old are you?"));
  const pres = prompt("Pick One President: Biden, Trump, or Obama");

  const showPres = function () {
    if (pres === "Biden" || pres === "biden") {
      $("#biden").show();
      } else if (pres === "Trump" || pres === "trump") {
        $("#trump").show();
      } else {
        $("#obama").show();
    };
  }

  if (age >= 18) {
    $('#vote').show();
    showPres();
  } else {
    $('#under-18').show();
    showPres();
  }
  
});