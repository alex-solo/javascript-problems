var invoices = {
  unpaid: [],
  paid: [],

  add: function(name, amount) {
    var tempObj = {name: name, amount: amount};
    this.unpaid.push(tempObj);
  },

  totalDue: function() {
    var total = 0;
    var i;
    
    for (i = 0; i < this.unpaid.length; i += 1) {
      total += this.unpaid[i].amount;
    }

    return total;
  },

  payInvoice: function(clientName) {
    var tempUnpaid = [];
    var i;

    for (i = 0; i < this.unpaid.length; i += 1) {
      if (this.unpaid[i].name === clientName) {
        this.paid.push(this.unpaid[i]);
      } else {
        tempUnpaid.push(this.unpaid[i]);
      }
    }

    this.unpaid = tempUnpaid;
  },

  totalPaid: function () {
    var total = 0;
    var i;
    
    for (i = 0; i < this.paid.length; i += 1) {
      total += this.paid[i].amount;
    }

    return total;
  },

}

//invoices.add('star', 40);
//invoices.add('buck', 90);
invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);
console.log(invoices.unpaid);
console.log(invoices.totalDue());

invoices.payInvoice('Due North Development');
invoices.payInvoice('Slough Digital');

console.log(invoices.totalPaid());
console.log(invoices.totalDue());

