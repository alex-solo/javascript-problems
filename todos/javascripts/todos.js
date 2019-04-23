$(function() {
  var todo_items = [
    { id: 1, title: 'Homework' },
    { id: 2, title: 'Shopping' },
    { id: 3, title: 'Calling Mom' },
    { id: 4, title: 'Coffee with John '}
  ];

  var $todos = $("#todos");
  var $overlay = $(".overlay");
  var idx;

  var templateScript = Handlebars.compile($("#todo_items").html());
  $todos.find("ul").append(templateScript({ todo_items : todo_items }));

  $todos.on("click", "a", function(e) {
    e.preventDefault();
    idx = $(this).closest("li").attr("data-id");

    $overlay.show();
  });

  $overlay.on("click", "a", function(e) {
    e.preventDefault();
    if ($(this).hasClass("yes")) {
      removeTodo(idx);
    }
    
    $overlay.hide();
  });

  function removeTodo(idx) {
    $todos.find("li[data-id=" + idx + "]").remove();
  }
});
