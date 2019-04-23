$(function() {
  var delay;
  $("#exotic_animals").on("mouseenter", "figure", function(e) {
    var $cap = $(this).find("figcaption");
    delay = setTimeout(function() {
      $cap.show(0);
    }, 2000);
  });

  $("#exotic_animals").on("mouseleave", "figure", function(e) {
    clearTimeout(delay);
    var $cap = $(this).find("figcaption");
    $cap.hide();
  });
});