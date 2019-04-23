var $letters = $("#spaces");
var $guesses = $("#guesses");
var $apples = $("#apples");
var $message = $("#message");
var $replay = $("#replay");

var randomWord = function() {
  var words = ["apple", "pear", "computer", "watermelon", "coffee", "electricity"];
  return function() {
    var index = Math.floor(Math.random() * words.length);
    var word = words[index];
    words.splice(index, 1);
    return word;
  };
}();

function Game() {
  this.word = randomWord();
  this.incorrect = 0;
  this.letters_guessed = [];
  this.correct_spaces = 0;

  if (!this.word) {
    this.displayMessage("Sorry, I've run out of words");
    this.toggleReplayLink(false);
    return this;
  }
  
  this.word = this.word.split("");
  this.init();
}

Game.prototype = {
  allowedGuesses: 6,
  createBlanks: function() {
    var spaces = (new Array(this.word.length + 1)).join("<span></span>");

    $letters.find("span").remove();
    $letters.append(spaces);
    this.$spaces = $("#spaces span");
  },
  displayMessage: function(text) {
    $message.text(text);
  },
  toggleReplayLink: function(which) {
    $replay.toggle(which);
  },
  alreadyGuessed: function(letter) {
    return this.letters_guessed.includes(letter);
  },
  processGuess: function(e) {
    var code = e.charCode;
    var letter = String.fromCharCode(code);
    
    if (notALetter(code) || this.alreadyGuessed(letter)) { return; }

    if ($.inArray(letter, this.word) !== -1) {
      this.renderGuess(letter);
      this.fillBlanksFor(letter);

      if (this.correct_spaces === this.$spaces.length) {
        this.win();
      }
    } else {
      this.renderIncorrectGuess(letter);
    }

    if (this.incorrect === this.allowedGuesses) {
      this.lose();
    }
  },
  win: function() {
    this.unbind();
    this.displayMessage("You win!");
    this.setGameStatus("win");
    this.toggleReplayLink(true);
  },
  lose: function() {
    this.unbind();
    this.displayMessage("You lose!");
    this.setGameStatus("lose");
    this.toggleReplayLink(true);
  },
  renderGuess: function(letter) {
    this.letters_guessed.push(letter);

    $("<span>", {
      text: letter
    }).appendTo($guesses);
  },
  renderIncorrectGuess: function(letter) {
    this.incorrect++;
    this.renderGuess(letter);
    this.setClass();
  },
  setClass: function() {
    $apples.removeClass().addClass("guess_" + this.incorrect);
  },
  emptyGuesses: function() {
    $guesses.find("span").remove();
  },
  unbind: function() {
    $(document).off(".game");
  },
  bind: function() {
    $(document).on("keypress.game", this.processGuess.bind(this));
  },
  init: function() {
    this.bind();
    this.setClass();
    this.toggleReplayLink(false);
    this.setGameStatus();
    this.emptyGuesses();
    this.createBlanks();
    this.displayMessage("");
  },
  fillBlanksFor: function(letter) {
    var self = this;

    self.word.forEach(function(l, i) {
      if (l === letter) {
        self.$spaces.eq(i).text(letter);
        self.correct_spaces++;
      }
    });
  },
  setGameStatus: function(status) {
    $(document.body).removeClass();

    if (status) {
      $(document.body).addClass(status);
    }
  },
};

function notALetter(code) {
  var regex = new RegExp("[a-z]");
  var char = String.fromCharCode(code);
  
  return !regex.test(char);
}

function alreadyGuessed(code, array) {
  return array.includes(guessed);
}

new Game();

$replay.on("click", function(e) {
  e.preventDefault();
  new Game();
});