function makeCar(accelRate, brakeRate) {
  var carObj = {
    speed: 0,
    accelrate: accelRate,
    brakeRate: brakeRate,

    accelerate: function () {
      this.speed += this.accelRate;
    },

    brake: function () {
      this.speed -= this.brakeRate;

      if (this.speed < 0) {
        this.speed = 0;
      }
    },
  };

  return carObj;
}

var sedan = makeCar(8, 6);
var coupe = makeCar(12);
var hatchback = makeCar(9);