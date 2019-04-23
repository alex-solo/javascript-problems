$("[data-type=partial]").each(function() {
  var $prtl = $(this);
  Handlebars.registerPartial($prtl.attr("id"), $prtl.html());
});

var templates = {};
$("script[type='text/x-handlebars-template']").each(function() {
  var $tmpl = $(this);
  templates[$tmpl.attr("id")] = Handlebars.compile($tmpl.html());
});

var cars = [
  { make: 'Honda', image: 'images/honda-accord-2005.jpg', model: 'Accord', year: 2005, price: 7000 },
  { make: 'Honda', image: 'images/honda-accord-2008.jpg', model: 'Accord', year: 2008, price: 11000 },
  { make: 'Toyota', image: 'images/toyota-camry-2009.jpg', model: 'Camry', year: 2009, price: 12500 },
  { make: 'Toyota', image: 'images/toyota-corrolla-2016.jpg', model: 'Corolla', year: 2016, price: 15000 },
  { make: 'Suzuki', image: 'images/suzuki-swift-2014.jpg', model: 'Swift', year: 2014, price: 9000 },
  { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 25000 },
  { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 26000 },
];

var App = {
  $filters: $("#filters"),
  filters: {},
  $cars: $("#cars"),
  allCars: cars,
  filteredCars: cars,
  getUniqueVals: function(key) {
    var resultsArr = [];
    var allKeys = this.allCars.map(function(car) {
      return car[key];
    });
    allKeys.forEach(function(key) {
      if (!resultsArr.includes(key)) {
        resultsArr.push(key)
      }
    });

    return resultsArr;
  },
  generateFilters: function() {
    var makes = this.getUniqueVals("make");
    var models = this.getUniqueVals("model");
    var years = this.getUniqueVals("year");
    var prices = this.getUniqueVals("price");

    return { makes: makes, models: models, years: years, prices: prices };
  },
  renderModelsForMake: function(models) {
    $("#model_select").html(templates.model_options_template({models: models}));
  },
  handleMakeSelect: function(e) {
    var make = $(e.target).val();
    var uniqueModels;

    if (make) {
      uniqueModels = _.uniq(_.pluck(_(this.allCars).where({make: make}), 'model'));
    } else {
      uniqueModels = _.uniq(_(this.allCars).pluck("model"));
    }
    
    this.renderModelsForMake(uniqueModels);
  },
  renderFilters: function() {
    this.generateFilters();
    this.$filters.html(templates.filters_template(this.generateFilters()));
  },
  renderCars: function() {
    this.$cars.html(templates.cars_template({ cars: this.filteredCars }));
  },
  handleFilterClick: function(e) {
    e.preventDefault();
    var make = $("#make_select").val();
    var model = $("#model_select").val();
    var price = Number($("#price_select").val());
    var year = Number($("#year_select").val());

    var filters = {};

    if (make) { filters.make = make };
    if (model) { filters.model = model };
    if (price) { filters.price = price };
    if (year) { filters.year = year };

    this.filterCars(filters);
  },
  filterCars: function(filters) {
    this.filteredCars = _(this.allCars).where(filters);
    this.renderCars();
  },
  bind: function(){
    $(".filter_button").on("click", this.handleFilterClick.bind(this));
    $("#make_select").on("change", this.handleMakeSelect.bind(this));
  },
  init: function() {
    this.renderFilters();
    this.renderCars();
    this.bind();
  },
};

$(App.init.bind(App));