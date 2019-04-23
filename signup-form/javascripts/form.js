// serialize the sign-up form data into a valid POST request body that is 
// compatible with a content-type of application/x-www-form-urlencoded.

var Form = {
  $textInputs: $("input[type=text]"),
  $nameInputs: $("input[type=text]").filter(".letters_only"),
  $f: $("form"),

  handleBlur: function(e) {
    var $input = $(e.target);
    var input = $input[0];
    var $span = $input.next("span");

    if (this.formValid()) {
      $("form > p").text("")
    }

    this.validateInput($input);
  },
  formValid: function() {
    return this.$f[0].checkValidity();
  },
  validateInput: function($input) {
    var input = $input[0];

    if (!input.checkValidity()) {
      if (input.validity.valueMissing) {
        this.handleValueMissing($input);
      }

      if (input.validity.patternMismatch) {
        this.handlePatternMismatch($input);
      }      
    }
  },
  handleValueMissing: function($input) {
    var labelText = $('label[for=' + $input.attr('id') + ']').text();
    var errorMessage = " is a required field."
    var $span = $input.next("span");

    $span.text(labelText + errorMessage);
    $input.addClass("invalid_field");
  },
  handlePatternMismatch: function($input) {
    var labelText = $('label[for=' + $input.attr('id') + ']').text() + "."; // Password, Phone Number ("Enter a valid ")
    var errorMessage = "Enter a valid "
    var $span = $input.next("span");

    if ($input.attr("name") === "password") {
      $span.text("Password must be at least 10 characters long.");
    }

    $span.text(errorMessage + labelText);
    $input.addClass("invalid_field");
  },
  handleFocus: function(e) {
    var $input = $(e.target);
    var $span = $input.next("span");

    $input.removeClass("invalid_field");
    $span.text("");
  },
  handleKeyPress: function(e) {
    var $el = $(e.target);
    var classOfElement = $el.attr("class");

    if (classOfElement === 'letters_only') {
      var re = new RegExp("[A-Za-z]");
      if (re.test(e.key)) { return true };
    } else if (classOfElement === 'digits_only') {
      var re = new RegExp("[0-9]");
      if (re.test(e.key) || e.key === "Tab" || e.key === "Backspace") { return true };
    }

    if (!classOfElement) { return true };
    
    return false;
  },
  handleSubmit: function(e) {
    e.preventDefault();

    var self = this;
    this.$textInputs.each(function() {
      if (!this.checkValidity()) {
        self.validateInput($(this));
      }
    });

    if (this.formValid()) {
      this.submitForm();
    } else {
      $("form > p").text("Form cannot be submitted until errors are corrected.")
    }
  },
  handleCCKeyPress: function(e) {
    var $input = $(e.target);
    //debugger;
    if ($input.val().length === +$input.attr("maxlength")) {
      $input.next().select();
    }

  },
  serialize: function() {
    var result = [];
    var ccNum = '';

    this.$textInputs.each(function() {
      var $input = $(this);
      var field = $input.attr("name");
      var field_val = $input.val();
      var str;

      if ($input.val() === '') { return true };
      if (field === 'credit_card') { 
        ccNum += field_val 
        return true;
      };

      str = field + "=" + encodeURIComponent(field_val);
      result.push(str);
    });

    result.push("credit_card=" + ccNum);
    
    return result.join("&");
  },
  submitForm: function() {
    console.log("Form Submitted to Server")
    var dataStr = this.serialize();

    $("#serialized p").html(dataStr);

  },
  bind: function() {
    this.$textInputs.on("focus", this.handleFocus.bind(this));
    this.$textInputs.on("blur", this.handleBlur.bind(this));
    this.$textInputs.on("keydown", this.handleKeyPress.bind(this));
    $("#cd1, #cd2, #cd3").on("keyup", this.handleCCKeyPress.bind(this));
    $("input[type=submit").on("click", this.handleSubmit.bind(this));
  },
  init: function() {
    this.bind();
  },
};

$(Form.init.bind(Form));
