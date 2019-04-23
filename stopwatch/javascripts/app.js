var App = {
  $toggle: $("#controls .toggle"),
  $reset: $("#controls .reset"),
  hours: 0,
  minutes: 0,
  seconds: 0,
  centiseconds: 0,
  timerOn: false,

  startStop: function() {
    (!this.timerOn) ? this.startTimer() : this.stopTimer();
    this.changeButtonText();
  },
  changeButtonText: function() {
    var str = (this.timerOn) ? "Stop" : "Start";
    this.$toggle.text(str);
  },
  startTimer: function() {
    this.timerOn = true;
    this.interval = setInterval(this.addTime.bind(this), 10);
  },
  addTime: function() {
    this.centiseconds += 1;
    if (this.centiseconds === 100) {
      this.centiseconds = 0;
      this.seconds += 1;

      if (this.seconds === 60) {
        this.seconds = 0;
        this.minutes += 1;
      
        if (this.minutes === 60) {
          this.minutes = 0;
          this.hours += 1;
        }
      }
    }
    
    this.displayTime(); 
  },
  displayTime: function() {
    $("#centiseconds").text(this.formatToString(this.centiseconds));
    $("#seconds").text(this.formatToString(this.seconds));
    $("#minutes").text(this.formatToString(this.minutes));
    $("#hours").text(this.formatToString(this.hours));
  },
  stopTimer: function() {
    this.timerOn = false;
    clearInterval(this.interval);
  },
  reset: function() {
    this.timerOn && this.stopTimer();
    
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.centiseconds = 0;

    this.displayTime();
  },
  
  formatToString: function(num) {
    var str = String(num);
    if (num < 10) {
      str = "0" + str;
    }
    return str;
  },
  
  bindEvents: function() {
    this.$toggle.on("click",this.startStop.bind(this));
    this.$reset.on("click", this.reset.bind(this));
  },
  init: function() {
    this.bindEvents();
  }
}

$(App.init.bind(App));