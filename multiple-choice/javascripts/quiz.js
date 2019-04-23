$(function() {
  var questions = [
    {
      id: 1,
      description: "Who is the author of <cite>The Hitchhiker's Guide to the Galaxy</cite>?",
      options: ['Dan Simmons', 'Douglas Adams', 'Stephen Fry', 'Robert A. Heinlein'],
    },
    {
      id: 2,
      description: 'Which of the following numbers is the answer to Life, the \
                    Universe and Everything?',
      options: ['66', '13', '111', '42'],
    },
    {
      id: 3,
      description: 'What is Pan Galactic Gargle Blaster?',
      options: ['A drink', 'A machine', 'A creature', 'None of the above'],
    },
    {
      id: 4,
      description: 'Which star system does Ford Prefect belong to?',
      options: ['Aldebaran', 'Algol', 'Betelgeuse', 'Alpha Centauri'],
    },
  ];
  var answerKey = { '1': 'Douglas Adams', '2': '42', '3': 'A drink', '4': 'Betelgeuse' };
  
  var questionsTemplate = Handlebars.compile($("#questions_template").html());
  Handlebars.registerPartial("question", $("#question_template").html());

  var Quiz = {
    submitted: false,
    $submit: $("input[type='submit']"),
    renderQuiz: function() {
      $("#quiz fieldset").html(questionsTemplate({ questions: questions }));
    },
    markQuiz: function($question) {
        var id = $question.attr("data-id")
        var userAnswer = $question.find(":checked").val()
        var correctAnswer = answerKey[id];
        var message;
        var $p = $question.find("p.message");

        if (userAnswer === correctAnswer) {
          message = "Correct";
          $p.addClass("correct");
        } else {
          message = "Incorrect"
          $p.addClass("wrong");
        }
        $p.text(message)
    },
    handleSubmitQuiz: function(e) {
      e.preventDefault();
      this.submitted = true;

      var self = this;
      $(".question").each(function() {
        self.markQuiz($(this));
      });

      this.$submit.attr("disabled", true);
    },
    handleChange: function(e) {
      if (this.submitted) { return false };

      if (this.allAnswered()) {
        this.$submit.removeAttr("disabled");
      }
    },
    allAnswered: function() {
      var allAnswered = true;
      $(".question").each(function() {
        if ($(this).find(":checked").length === 0) {  //nothing is checked
          allAnswered = false;
          return false;
        }
      });
      return allAnswered;
    },
    handleReset: function(e) {
      this.$submit.attr("disabled", true);
      this.submitted = false;
      $(".question").each(function() {
        $(this).find("p.message").text("");
        $(this).find("p.message").removeClass("correct wrong");
      });
    },
    bind: function() {
      
      this.$submit.on("click", this.handleSubmitQuiz.bind(this));
      $("input[type='radio']").on("change", this.handleChange.bind(this));
      $("input[type='reset']").on("click", this.handleReset.bind(this));
    },
    init: function() {
      this.renderQuiz();
      this.bind();
    },
  };

  Quiz.init();
});