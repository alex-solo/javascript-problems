function makeProduct(id, name, stock, price) {
  return {
    id: id,
    name: name,
    stock: stock,
    price: price,

    setPrice: function(price) {
      if (price >= 0) {
        this.price = price;
      } else {
        alert('Invalid Price');
      }
    },

    describeProduct: function() {
      return 'Name: ' + this.name + "\n" + 'ID: ' + this.id + "\n" + 'Price: $' + this.price + "\n" + 'Stock: ' + this.stock;
    }
  }
}

var scissors = makeProduct(0, 'Scissors', 8, 10);
var drill = makeProduct(1, 'Cordless Drill', 15, 45);

scissors.setPrice(15);

console.log(scissors);
console.log(scissors.describeProduct());