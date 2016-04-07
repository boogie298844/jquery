$(document).ready( function () {

   $("#meow").click( function() {
     $("#animals").append("<img class='animal' src='images/nyancat.png' alt='nyancat' />");

     $("#bulbasaur").click( function() {
       $("#leaf").append("<img class='leaf' src='images/bulbasaur.png' alt='pokemon' />");

   });

});
