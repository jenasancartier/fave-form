// Buisiness Logic



// User Interface Logic

$(document).ready(function() {



  $("form#faves").submit(function(event){
    event.preventDefault();

    var q1 = $("input#q1").val();
    // alert(q1);
    var q2 = $("input#q2").val();
    var q3 = $("input#q3").val();
    var q4 = $("input#q4").val();
    var faves = [q1,q2,q3,q4];
    var faves2 = [];

  $(".band").text(faves[0]);
  $(".food").text(faves[1]);
  $(".city").text(faves[2]);
  alert(faves);
  faves.reverse();
  faves2.push(faves[0],faves[1],faves[2],faves[3]);
  alert(faves2);
  $(".band2").text(faves2[1]);
  $(".food2").text(faves2[2]);
  $(".city2").text(faves2[3]);

  // function printList(faves2) {
  //   var listHtml = "<ol>";
  //   for (var i = 0; i < faves2.length i += 1){
  //     listHtml += "<li>" + faves2[i] + "</li>"
  //   }
  //   listHtml += "</ol>"
  // }
  // $("#listHtml").text();
  });

});
