'use strict';
var cookieStoreOne = {
  name: '1st and Pike',
  storeHours: ['6am','7am','8am','9am','10am','11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  avgCustomerCookieSale: 6.3,
  cookiesPerHour: [],
  total: 0,
  customersPerHour: function getRandomIntInclusive() {
    var min = Math.ceil(this.minHourlyCustomers);
    var max = Math.floor(this.maxHourlyCustomers);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  cookiesByTheHour: function () {
    //var total = 0;
    for (var i = 0; i < this.storeHours.length; i++) {
      //console.log(this.customersPerHour()); <--how to check stuff
      var numCookies = this.customersPerHour() * this.avgCustomerCookieSale;
      this.cookiesPerHour.push(numCookies);
    }
    console.log('message', this.cookiesPerHour);
  },
  sumDailyCookies: function() {
    this.cookiesByTheHour();
    var summingArray = this.cookiesPerHour;
    var sum = 0;
    for (var i = 0; i < summingArray.length; i++){
      sum += summingArray[i];
    };
    this.total = sum;
    console.log(this.total);
  },
};

console.log(cookieStoreOne);

var cookieStoreTwo = {
  name: 'SeaTac Airport',
  storeHours: ['6am','7am','8am','9am','10am','11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  minHourlyCustomers: 3,
  maxHourlyCustomers: 24,
  avgCustomerCookieSale: 1.2,
  cookiesPerHour: [],
  customersPerHour: function getRandomIntInclusive() {
    var min = Math.ceil(this.minHourlyCustomers);
    var max = Math.floor(this.maxHourlyCustomers);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  cookiesByTheHour: function () {
    //var total = 0;
    for (var i = 0; i < this.storeHours.length; i++) {
      //console.log(this.customersPerHour()); <--how to check stuff
      var numCookies = this.customersPerHour() * this.avgCustomerCookieSale;
      this.cookiesPerHour.push(numCookies);
    }
    console.log(this.cookiesPerHour);
  },
  sumDailyCookies: function() {
    this.cookiesByTheHour();
    var summingArray = this.cookiesPerHour;
    var sum = 0;
    for (var i = 0; i < summingArray.length; i++){
      sum += summingArray[i];
    };
    this.total = sum;
    console.log(this.total);
  },
};

console.log(cookieStoreTwo);

var cookieStoreThree = {
  name: 'Seattle Center',
  storeHours: ['6am','7am','8am','9am','10am','11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  minHourlyCustomers: 11,
  maxHourlyCustomers: 38,
  avgCustomerCookieSale: 3.7,
  cookiesPerHour: [],
  customersPerHour: function getRandomIntInclusive() {
    var min = Math.ceil(this.minHourlyCustomers);
    var max = Math.floor(this.maxHourlyCustomers);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  cookiesByTheHour: function () {
    //var total = 0;
    for (var i = 0; i < this.storeHours.length; i++) {
      //console.log(this.customersPerHour()); <--how to check stuff
      var numCookies = this.customersPerHour() * this.avgCustomerCookieSale;
      this.cookiesPerHour.push(numCookies);
    }
    console.log(this.cookiesPerHour);
  },
  sumDailyCookies: function() {
    this.cookiesByTheHour();
    var summingArray = this.cookiesPerHour;
    var sum = 0;
    for (var i = 0; i < summingArray.length; i++){
      sum += summingArray[i];
    };
    this.total = sum;
    console.log(this.total);
  },
};

console.log(cookieStoreThree);

var cookieStoreFour = {
  name: 'Capitol Hill',
  storeHours: ['6am','7am','8am','9am','10am','11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  minHourlyCustomers: 20,
  maxHourlyCustomers: 38,
  avgCustomerCookieSale: 2.3,
  cookiesPerHour: [],
  customersPerHour: function getRandomIntInclusive() {
    var min = Math.ceil(this.minHourlyCustomers);
    var max = Math.floor(this.maxHourlyCustomers);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  cookiesByTheHour: function () {
    //var total = 0;
    for (var i = 0; i < this.storeHours.length; i++) {
      //console.log(this.customersPerHour()); <--how to check stuff
      var numCookies = this.customersPerHour() * this.avgCustomerCookieSale;
      this.cookiesPerHour.push(numCookies);
    }
    console.log(this.cookiesPerHour);
  },
  sumDailyCookies: function() {
    this.cookiesByTheHour();
    var summingArray = this.cookiesPerHour;
    var sum = 0;
    for (var i = 0; i < summingArray.length; i++){
      sum += summingArray[i];
    };
    this.total = sum;
    console.log(this.total);
  },
};

console.log(cookieStoreFour);

var cookieStoreFive = {
  name: 'Alki',
  storeHours: ['6am','7am','8am','9am','10am','11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  minHourlyCustomers: 2,
  maxHourlyCustomers: 16,
  avgCustomerCookieSale: 4.6,
  cookiesPerHour: [],
  customersPerHour: function getRandomIntInclusive() {
    var min = Math.ceil(this.minHourlyCustomers);
    var max = Math.floor(this.maxHourlyCustomers);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  cookiesByTheHour: function () {
    //var total = 0;
    for (var i = 0; i < this.storeHours.length; i++) {
      //console.log(this.customersPerHour()); <--how to check stuff
      var numCookies = this.customersPerHour() * this.avgCustomerCookieSale;
      this.cookiesPerHour.push(numCookies);
    }
    console.log(this.cookiesPerHour);
  },
  sumDailyCookies: function() {
    this.cookiesByTheHour();
    var summingArray = this.cookiesPerHour;
    var sum = 0;
    for (var i = 0; i < summingArray.length; i++){
      sum += summingArray[i];
    };
    this.total = sum;
    console.log(this.total);
  },
};

console.log(cookieStoreFive);

cookieStoreOne.sumDailyCookies();
cookieStoreTwo.sumDailyCookies();
cookieStoreThree.sumDailyCookies();
cookieStoreFour.sumDailyCookies();
cookieStoreFive.sumDailyCookies();
