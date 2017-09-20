// ****************Business Logic***********************
var vowels = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y"];
var output = [];

var pigLatin = function(phrase) {
  for (var i = 0; i < vowels.length; i += 1) {
    if (phrase === vowels[i]) {
      output = phrase.concat("way");
      return output;
    }
  };
      output = phrase;
      return output;
};





// *************User Interface Logic**********************
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var input = ($("input#phrase").val());
    var result = pigLatin(input);
    // console.log(input);
    $("#result").text(result);
  });
});
