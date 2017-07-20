var printPeople = [
]

var webPeople = [
]


var newHTML1 = [];
var newHTML2 = [];

$.each(tahitiPeople, function(i, value) {
    newHTML1.push('<div class="gram"><a href="http://instagram.com/' + value.handle + '" target="_blank"><img img  class="lazy" src="../img/placeholder.jpg" data-original="images/' + value.image + '" alt="' + value.handle  + '" /> <p>' + value.handle  + '</p></a></div>');
});
$("#print-grid").html(newHTML1.join("  "));

$.each(tofinoPeople, function(i, value) {
    newHTML2.push('<div class="gram"><a href="http://instagram.com/' + value.handle + '" target="_blank"><img img  class="lazy" src="../img/placeholder.jpg" data-original="images/' + value.image + '" alt="' + value.handle  + '" /> <p>' + value.handle  + '</p></a></div>');
});
$("#web-grid").html(newHTML2.join("  "));
