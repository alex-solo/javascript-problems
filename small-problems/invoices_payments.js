function createInvoice(services) {
  services = services || {};
  var payments = [];

  return {
    phone: services.phone || 3000,
    internet: services.internet || 5500,
    total: function() {
      return this.phone + this.internet;
    },

    addPayment: function(payment) {
      payments.push(payment);
    },

    addPayments: function(array) {
      payments = payments.concat(array);
    },

    paymentTotal: function() {
      var totalPaid = 0;
      var i;

      for (i = 0; i < payments.length; i += 1) {
        totalPaid += payments[i].total();
      }
      return totalPaid;
    },

    amountDue: function() {
      return this.total() - this.paymentTotal();
    },
  };
}

function invoiceTotal(invoices) {
  var total = 0;
  var i;
  for (i = 0; i < invoices.length; i += 1) {
    total += invoices[i].total();
  }
  return total;
}

function createPayment(services) {
  services = services || {};

  return {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount,
    total: function() {
      return this.amount || (this.phone + this.internet);
    },
  };
}

function paymentTotal(payments) {
  var total = 0;
  var i;

  for (i = 0; i < payments.length; i += 1) {
    total += payments[i].total();
  }

  return total;
}

var invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

var payment1 = createPayment({
  amount: 2000
});

var payment2 = createPayment({
  phone: 1000,
  internet: 1200,
});

var payment3 = createPayment({
  phone: 1000,
});

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);

console.log(invoice.amountDue());       // this should return 0
