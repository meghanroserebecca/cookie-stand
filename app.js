'use strict';
var cookieStoreOne = {
  name: '1st and Pike',
  storeHours: ['6am','7am','8am','9am','10am','11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  avgCustomerCookieSale: 6.3,
  cookiesPerHour: [],
  customersPerHour: function getRandomIntInclusive() {
    var min = Math.ceil(this.minHourlyCustomers);
    var max = Math.floor(this.maxHourlyCustomers);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  customersByTheHour: function () {
    //var total = 0;
    for (var i = 0; i < this.storeHours.length; i++) {
      //console.log(this.customersPerHour()); <--how to check stuff
      var numCookies = this.customersPerHour() * this.avgCustomerCookieSale;
      console.log(numCookies);
      this.cookiesPerHour.push(numCookies);
    }
    console.log(this.cookiesPerHour);
  }
};
