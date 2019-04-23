// reset form with:
// $('form').get(0).reset();

$(function() {
  var $ul = $('ul');

  function addItem(name, quantity) {
    $ul.append("<li>" + quantity + " " + name + "</li>");

  }

  $('form').submit(function(e) {
    e.preventDefault();

    var $form = $(this);
    var name = $form.find('#name').val();
    var quantity = $form.find('#quantity').val() || 1;

    addItem(name, quantity);
    $form.get(0).reset();
  });
});