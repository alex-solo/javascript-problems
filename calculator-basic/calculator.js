$(function() {
  var result;

  $('form').submit(function(event) {
    event.preventDefault();
    
    var $numerator = parseInt($('#numerator').val(), 10);
    var $denominator = parseInt($('#denominator').val(), 10);
    var $operator = $('#operator').val();

    switch ($operator) {
      case '+':
        result = $numerator + $denominator;
        break;
      case '-':
        result = $numerator - $denominator;
        break;
      case '/':
        result = Math.round($numerator / $denominator * 100) / 100;
        break;
      case '*':
        result = $numerator * $denominator;
        break;
    }

    $('h1').text(String(result));
  });
});