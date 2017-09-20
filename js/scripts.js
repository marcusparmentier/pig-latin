// ****************Business Logic***********************

var pigLatin = function(phrase) {
    return phrase;
};




// *************User Interface Logic**********************
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var phrase = ($("input#phrase").val());
    var result = pigLatin(phrase);
    $("#result").text(result);
  });
});
