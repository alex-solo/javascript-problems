var App = {
  bindButtons: function() {
    $("#buttons").find("[type=button]").each(function() {
      var $btn = $(this);
      var command = $btn.attr("id");

      if (command === "createLink") {
        $btn.on("click", function(e) {
          e.preventDefault();

          var url = prompt("Please enter URL");
          document.execCommand(command, true, url);
          return;
        });
      }

      $btn.on("click", function(e) {
        e.preventDefault();
        document.execCommand(command, true, '');
      });
    });
    
  },
  init: function() {
    this.bindButtons();
  },
};

$(App.init.bind(App));