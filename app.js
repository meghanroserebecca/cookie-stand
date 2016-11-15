'use strict';

//*as part of an object, consider using a toHTML: function () {
//   var uL = document.createElement('ul');
//  var storeNameListItem = document.createElement('li'); <<--THIS CREATES THE NODE
//  var totalListItem = document.createElement('li');
//  var hourlyListItem;
//  var hourMessage;
//
//  storeNameListItem.textContent = this.name; <<--THIS UPDATES THE CONTENT OF THE NODE
//  ul.appendChild(storeNameListItem); <<--THIS PUTS THE NODE WHERE IT NEEDS TO GO
//  for (var i = 0, i < this.storeHours.length; i++) {
//    hourlyListItem = document.createElement('li')
//    hourMessage = this.hours[i] + ': ' + this.salesPerHour[i],
//     hoursleListItem.textCtntent = hourMessage;
//    ul.appendChild(hourlyListItem);
//  }
//  totalListItem.textContent = 'Total:' + this.total;
//  ul.appendChild(totalListItem);
//}

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
      var numCookies = Math.round(this.customersPerHour() * this.avgCustomerCookieSale);
      this.cookiesPerHour.push(numCookies);
      //could have put the total update here as ....this.total += numCookies... instead of writing the 2nd function below
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
  listHourlyCookieSales: function() {
    var contentArea = document.getElementById('content_area');
    var ul = document.createElement('ul');
    var p = document.createElement('p');
    var li;
    var li2 = document.createElement('li');
    p.textContent = this.name;
    for (var i = 0; i < this.storeHours.length; i++) {
      li = document.createElement('li');
      li.textContent = this.storeHours[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
      ul.appendChild(li);
    }
    li2.textContent = 'Total: ' + this.total + ' cookies';
    ul.appendChild(li2);
    contentArea.appendChild(p);
    contentArea.appendChild(ul);
  }
};

cookieStoreOne.sumDailyCookies();
console.log(cookieStoreOne);
cookieStoreOne.listHourlyCookieSales();

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
      var numCookies = Math.round(this.customersPerHour() * this.avgCustomerCookieSale);
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
  listHourlyCookieSales: function() {
    var contentArea = document.getElementById('content_area');
    var ul = document.createElement('ul');
    var p = document.createElement('p');
    var li;
    var li2 = document.createElement('li');
    p.textContent = this.name;
    for (var i = 0; i < this.storeHours.length; i++) {
      li = document.createElement('li');
      li.textContent = this.storeHours[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
      ul.appendChild(li);
    };
    li2.textContent = 'Total: ' + this.total + ' cookies';
    ul.appendChild(li2);
    contentArea.appendChild(p);
    contentArea.appendChild(ul);
  }
};

cookieStoreTwo.sumDailyCookies();
cookieStoreTwo.listHourlyCookieSales();
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
      var numCookies = Math.round(this.customersPerHour() * this.avgCustomerCookieSale);
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
  listHourlyCookieSales: function() {
    var contentArea = document.getElementById('content_area');
    var ul = document.createElement('ul');
    var p = document.createElement('p');
    var li;
    var li2 = document.createElement('li');
    p.textContent = this.name;
    for (var i = 0; i < this.storeHours.length; i++) {
      li = document.createElement('li');
      li.textContent = this.storeHours[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
      ul.appendChild(li);
    }
    li2.textContent = 'Total: ' + this.total + ' cookies';
    ul.appendChild(li2);
    contentArea.appendChild(p);
    contentArea.appendChild(ul);
  }
};

cookieStoreThree.sumDailyCookies();
cookieStoreThree.listHourlyCookieSales();
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
      var numCookies = Math.round(this.customersPerHour() * this.avgCustomerCookieSale);
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
  listHourlyCookieSales: function() {
    var contentArea = document.getElementById('content_area');
    var ul = document.createElement('ul');
    var p = document.createElement('p');
    var li;
    var li2 = document.createElement('li');
    p.textContent = this.name;
    for (var i = 0; i < this.storeHours.length; i++) {
      li = document.createElement('li');
      li.textContent = this.storeHours[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
      ul.appendChild(li);
    }
    li2.textContent = 'Total: ' + this.total + ' cookies';
    ul.appendChild(li2);
    contentArea.appendChild(p);
    contentArea.appendChild(ul);
  }
};

cookieStoreFour.sumDailyCookies();
cookieStoreFour.listHourlyCookieSales();
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
      var numCookies = Math.round(this.customersPerHour() * this.avgCustomerCookieSale);
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
  listHourlyCookieSales: function() {
    var contentArea = document.getElementById('content_area');
    var ul = document.createElement('ul');
    var p = document.createElement('p');
    var li;
    var li2 = document.createElement('li');
    p.textContent = this.name;
    for (var i = 0; i < this.storeHours.length; i++) {
      li = document.createElement('li');
      li.textContent = this.storeHours[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
      ul.appendChild(li);
    }
    li2.textContent = 'Total: ' + this.total + ' cookies';
    ul.appendChild(li2);
    contentArea.appendChild(p);
    contentArea.appendChild(ul);
  }
};

cookieStoreFive.sumDailyCookies();
cookieStoreFive.listHourlyCookieSales();
console.log(cookieStoreFive);

cookieStoreOne.sumDailyCookies();
cookieStoreTwo.sumDailyCookies();
cookieStoreThree.sumDailyCookies();
cookieStoreFour.sumDailyCookies();
cookieStoreFive.sumDailyCookies();
