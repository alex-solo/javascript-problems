var App = {
  $buttons: $("#buttons"),
  $current_num: $("#screen .current_num"),
  $calculation: $("#screen .calculation"),
  entry: "0",
  calculation: [],
  result: 0,
  updateEntryField: false,
  handleDigit: function(e) {
    e.preventDefault();
    var numStr = $(e.target).text();
    if (numStr === "0" && this.entry === '0') { return };
    if (this.entry === '0') {
      this.entry = numStr;
    } else {
      this.entry += numStr;
    }
    
    this.displayEntry();
  },
  displayEntry: function() {
    this.$current_num.html(this.entry);
  },
  displayCalculation: function() {
    this.$calculation.html(this.calculation.join(" "));
  },
  handleOperator: function(e) {
    e.preventDefault();
    var operator = $(e.target).text();
    
    this.calculation.push(this.entry)
    this.calculation.push(operator);

    if (this.updateEntryField) {
      this.calculate();
    }

    this.displayCalculation();
    this.clearEntry();
    this.updateEntryField = true;
  },
  ceClick: function(e) {
    e.preventDefault();
    this.clearEntry();
  },
  cClick: function(e) {
    e.preventDefault();
    this.clearAll();
  },
  clearEntry: function() {
    this.entry = "0";
    this.displayEntry();
  },
  clearAll: function(e) {
    this.clearEntry();
    this.clearCalculation();
    this.result = 0;
  },
  clearCalculation: function() {
    this.calculation = [];
    this.displayCalculation();
  },
  negateEntry: function(e) {
    e.preventDefault();
    this.entry = "-" + this.entry;
    this.displayEntry();
  },
  resultButtonClick: function(e) {
    e.preventDefault();
    this.calculate();
  },
  calculate: function() {
    var finalArray = this.calculation.concat(this.entry);
    console.dir(finalArray);
  },
  bind: function() {
    this.$buttons.on("click", "a.digit", this.handleDigit.bind(this));
    this.$buttons.on("click", "a.op", this.handleOperator.bind(this));
    $("#ce").on("click", this.ceClick.bind(this));
    $("#c").on("click", this.cClick.bind(this));
    $("#neg").on("click", this.negateEntry.bind(this));
    $(".result_button").on("click", this.calculate.bind(this));
  },
  init: function() {
    this.bind();
  },
};

$(App.init.bind(App));