'use strict';

function CookieStore(storeName, minHourlyCustomers, maxHourlyCustomers, avgCustomerCookieSale) {
  this.name = storeName;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.avgCustomerCookieSale = avgCustomerCookieSale;
  this.cookiesPerHour = [];
  this.total = 0;
  this.hours = ['6am', '7am', '8 am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
}

CookieStore.prototype.logStoreName = function () {
  console.log(this.name);
};

CookieStore.prototype.customersPerHour = function getRandomIntInclusive() {
  var min = Math.ceil(this.minHourlyCustomers);
  var max = Math.floor(this.maxHourlyCustomers);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

CookieStore.prototype.cookiesByTheHour = function () {
  //var total = 0;
  for (var i = 0; i < this.hours.length; i++) {
    //console.log(this.customersPerHour()); <--how to check stuff
    var numCookies = Math.round(this.customersPerHour() * this.avgCustomerCookieSale);
    this.cookiesPerHour.push(numCookies);
    this.total += numCookies;
  };
};

CookieStore.prototype.toHTML = function () {
  var storeTable = document.getElementById('store_table');
  var tableRow = document.createElement('tr');
  var nameTableHeader = document.createElement('th');
  var totalTableData = document.createElement('td');

  nameTableHeader.textContent = this.name;
  tableRow.appendChild(nameTableHeader);

  for (var i = 0; i < this.hours.length; i++){
    var hourlyTableData1 = document.createElement('td');
    var hourlyTableData2 = document.createElement('td');
    hourlyTableData1.textContent = this.hours[i];
    hourlyTableData2.textContent = this.cookiesPerHour[i];
    tableRow.appendChild(hourlyTableData1);
    tableRow.appendChild(hourlyTableData2);
  }
  totalTableData.textContent = this.total;
  tableRow.appendChild(totalTableData);

  storeTable.appendChild(tableRow);
};

var pike = new CookieStore('Pike', 23, 65, 6.3);
console.log(pike);
pike.cookiesByTheHour();
pike.toHTML();
console.log(pike.cookiesPerHour);
console.log(pike.total);

var seaTacAirport = new CookieStore('SeaTac Airport', 3, 23, 1.2);
console.log(seaTacAirport);
seaTacAirport.cookiesByTheHour();
console.log(seaTacAirport.cookiesPerHour);
console.log(seaTacAirport.total);

var seattleCenter = new CookieStore('Seattle Center', 11, 38, 3.7);
console.log(seattleCenter);
seattleCenter.cookiesByTheHour();
console.log(seattleCenter.cookiesPerHour);
console.log(seattleCenter.total);

var capitolHill = new CookieStore('Capitol Hill', 20, 38, 2.3);
console.log(capitolHill);
capitolHill.cookiesByTheHour();
console.log(capitolHill.cookiesPerHour);
console.log(capitolHill.total);

var alki = new CookieStore('Alki', 2, 16, 4.6);
console.log(alki);
alki.cookiesByTheHour();
console.log(alki.cookiesPerHour);
console.log(alki.total);
